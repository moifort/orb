#!/bin/bash
set -euo pipefail

BUS=1
ADDR=0x29

echo "[1/4] Check model ID (0x000) -> attendu 0xB4 (VL6180X)"
i2ctransfer -y $BUS w2@$ADDR 0x00 0x00 r1

echo "[2/4] Charge SR03 settings (AN4545 §9 : 'Mandatory : private registers')"
# 16-bit register index => hi, lo, then data
i2ctransfer -y $BUS w3@$ADDR 0x02 0x07 0x01
i2ctransfer -y $BUS w3@$ADDR 0x02 0x08 0x01
i2ctransfer -y $BUS w3@$ADDR 0x00 0x96 0x00
i2ctransfer -y $BUS w3@$ADDR 0x00 0x97 0xfd
i2ctransfer -y $BUS w3@$ADDR 0x00 0xe3 0x01
i2ctransfer -y $BUS w3@$ADDR 0x00 0xe4 0x03
i2ctransfer -y $BUS w3@$ADDR 0x00 0xe5 0x02
i2ctransfer -y $BUS w3@$ADDR 0x00 0xe6 0x01
i2ctransfer -y $BUS w3@$ADDR 0x00 0xe7 0x03
i2ctransfer -y $BUS w3@$ADDR 0x00 0xf5 0x02
i2ctransfer -y $BUS w3@$ADDR 0x00 0xd9 0x05
i2ctransfer -y $BUS w3@$ADDR 0x00 0xdb 0xce
i2ctransfer -y $BUS w3@$ADDR 0x00 0xdc 0x03
i2ctransfer -y $BUS w3@$ADDR 0x00 0xdd 0xf8
i2ctransfer -y $BUS w3@$ADDR 0x00 0x9f 0x00
i2ctransfer -y $BUS w3@$ADDR 0x00 0xa3 0x3c
i2ctransfer -y $BUS w3@$ADDR 0x00 0xb7 0x00
i2ctransfer -y $BUS w3@$ADDR 0x00 0xbb 0x3c
i2ctransfer -y $BUS w3@$ADDR 0x00 0xb2 0x09
i2ctransfer -y $BUS w3@$ADDR 0x00 0xca 0x09
i2ctransfer -y $BUS w3@$ADDR 0x01 0x98 0x01
i2ctransfer -y $BUS w3@$ADDR 0x01 0xb0 0x17
i2ctransfer -y $BUS w3@$ADDR 0x01 0xad 0x00
i2ctransfer -y $BUS w3@$ADDR 0x00 0xff 0x05
i2ctransfer -y $BUS w3@$ADDR 0x01 0x00 0x05
i2ctransfer -y $BUS w3@$ADDR 0x01 0x99 0x05
i2ctransfer -y $BUS w3@$ADDR 0x01 0xa6 0x1b
i2ctransfer -y $BUS w3@$ADDR 0x01 0xac 0x3e
i2ctransfer -y $BUS w3@$ADDR 0x01 0xa7 0x1f
i2ctransfer -y $BUS w3@$ADDR 0x00 0x30 0x00

echo "[3/4] Public settings recommandés"
# Poll “New Sample Ready”, périodes, gains, intégration ALS, calibration température,
# et IRQ interne sur 'New Sample Ready'
i2ctransfer -y $BUS w3@$ADDR 0x00 0x11 0x10
i2ctransfer -y $BUS w3@$ADDR 0x01 0x0a 0x30
i2ctransfer -y $BUS w3@$ADDR 0x00 0x3f 0x46
i2ctransfer -y $BUS w3@$ADDR 0x00 0x31 0xff
i2ctransfer -y $BUS w3@$ADDR 0x00 0x41 0x63
i2ctransfer -y $BUS w3@$ADDR 0x00 0x2e 0x01
i2ctransfer -y $BUS w3@$ADDR 0x00 0x1b 0x09
i2ctransfer -y $BUS w3@$ADDR 0x00 0x3e 0x31
i2ctransfer -y $BUS w3@$ADDR 0x00 0x14 0x24   # IRQ interne Range 'New Sample Ready'

# Marquer la fin d’init (optionnel)
i2ctransfer -y $BUS w3@$ADDR 0x00 0x16 0x00   # SYSTEM__FRESH_OUT_OF_RESET <- 0

echo "[4/4] Boucle de mesure (single-shot)"
while true; do
  # start: SYSRANGE__START {0x18} <- 0x01
  i2ctransfer -y $BUS w3@$ADDR 0x00 0x18 0x01

  # poll RESULT__INTERRUPT_STATUS_GPIO {0x4F}, bit2=1 (0b100)
  for i in {1..200}; do
    ready=$(i2ctransfer -y $BUS w2@$ADDR 0x00 0x4f r1 | awk '{print $1}')
    # to int
    val=$((16#${ready#0x}))
    if [ $((val & 0x07)) -eq 4 ]; then break; fi
    usleep 5000
  done

  # read distance {0x62} (mm)
  dhex=$(i2ctransfer -y $BUS w2@$ADDR 0x00 0x62 r1 | awk '{print $1}')
  d=$((16#${dhex#0x}))

  # read status {0x4D} (bits7:4)
  sth=$(i2ctransfer -y $BUS w2@$ADDR 0x00 0x4d r1 | awk '{print $1}')
  st=$(( (16#${sth#0x} & 0xF0) >> 4 ))

  echo "Distance: ${d} mm | status_code: ${st}"

  # clear interrupt {0x15} <- 0x07
  i2ctransfer -y $BUS w3@$ADDR 0x00 0x15 0x07

  sleep 0.10
done
