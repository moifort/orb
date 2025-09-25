#!/bin/dash
# Autostart script for kiosk mode, based on @AYapejian: https://github.com/MichaIng/DietPi/issues/1737#issue-318697621

# Resolution to use for kiosk mode, should ideally match current system resolution
RES_X=1080
RES_Y=1080

# Command line switches: https://peter.sh/experiments/chromium-command-line-switches/
# - Review and add custom flags in: /etc/chromium.d
CHROMIUM_OPTS="--kiosk --window-size=1080,1080 --window-position=0,0 --no-memcheck --enable-low-end-device-modee --renderer-process-limit=1  --disable-pinch --disable-features=TranslateUI,AutofillServerCommunication"
# CHROMIUM_OPTS="$CHROMIUM_OPTS --enable-low-end-device-mode --js-flags=\"--max-old-space-size=400\" --process-per-site --renderer-process-limit=1 --disable-translate"

# If you want tablet mode, uncomment the next line.
# CHROMIUM_OPTS="$CHROMIUM_OPTS --force-tablet-mode --tablet-ui"

# CHROMIUM_OPTS="$CHROMIUM_OPTS --disable-low-memory-check --enable-low-end-device-mode --incognito --no-first-run --noerrdialogs --disable-infobars --disable-translate --disable-features=TranslateUI,AutofillServerCommunication --disable-session-crashed-bubble --overscroll-history-navigation=0  --disable-pinch --disable-sync --disable-logging --check-for-update-interval=31536000 --simulate-outdated-no-au=\"Tue, 31 Dec 2099 23:59:59 GMT\""


# Home page
URL="http://localhost:3000"

# RPi or Debian Chromium package
FP_CHROMIUM=$(command -v chromium-browser)
[ "$FP_CHROMIUM" ] || FP_CHROMIUM=$(command -v chromium)

# Use "startx" as non-root user to get required permissions via systemd-logind
STARTX='xinit'
[ "$USER" = 'root' ] || STARTX='startx'

node /root/app/server/index.mjs &
sleep 3

exec "$STARTX" "$FP_CHROMIUM" $CHROMIUM_OPTS "${URL:-https://dietpi.com/}" -- -nocursor
