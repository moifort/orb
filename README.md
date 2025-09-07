# ☕️ Orb — _Another Gaggia Mod_

![image](./.docs/orb.png)
> Design-first, fully connected, all-TypeScript Gaggia mod. Bigger round screen, web dev-friendly stack ❤️.
---

## Why a new Open Source mode ?
Because I love coffee, coding and electronics. I want to create from scratch but in full typescript and with a techno
I used from a long time NuxtJs. If you are a web developer you will not be lost :).
And with a bigger screen because why not ?

## Source
- [🖌️ Figma design discovery](https://www.figma.com/design/AHiLtSJ49nn0VO5oZbc940/Nuxt-UI-v3-•-Official-Design-Kit-•-Free--Community-?node-id=3523-8815&p=f&t=C1Ur5FfJ0Jg08B5x-0)

## Roadmap
> 💡 If you want to change a priority or add a feature, please open an issue or propose a PR.

- **Phase 1:** Proof Of Concept, capatibility to control at least one sensor, one relay and touch screen with Typescript
    - [x] Init Nuxt project
    - [x] Buy components:
        - [x] [Kit Raspberry Pi Zero 2W](https://fr.aliexpress.com/item/1005008267755917.html?spm=a2g0o.order_list.order_list_main.10.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **23€**
        - [x] [Touch Screen 5 inch 1080x1080](https://fr.aliexpress.com/item/1005005498872449.html?spm=a2g0o.order_list.order_list_main.30.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **126€**
        - [x] [K-Type M4 Thermocouple](https://fr.aliexpress.com/item/1005005496786289.html?spm=a2g0o.order_list.order_list_main.15.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **2€**
        - [x] [MAX31855 Temperature sensor board](https://fr.aliexpress.com/item/1005005008373588.html?businessType=ProductDetail&srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60912297260&aff_fcid=95a1e04e32ac448ea27c9f69c721219f-1757278656595-05401-_EuEbJO4&tt=CPS_NORMAL&aff_fsk=_EuEbJO4&aff_platform=shareComponent-detail&sk=_EuEbJO4&aff_trace_key=95a1e04e32ac448ea27c9f69c721219f-1757278656595-05401-_EuEbJO4&shareId=60912297260&businessType=ProductDetail&platform=AE&terminal_id=4f4c5c4072c3433a89a03e4f7aaeeab8&gatewayAdapt=glo2fra) - **5€**
        - [x] [2-Channel 5V Relay](https://fr.aliexpress.com/item/1005001903120199.html?spm=a2g0o.order_list.order_list_main.20.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **2€**
        - [x] [Dupont cables](https://fr.aliexpress.com/item/1005005501503609.html?spm=a2g0o.order_list.order_list_main.25.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **1€**
    - [ ] Install on Raspberry Pi Zero in chromium kiosk mode
    - [ ] Connect tactile screen
    - [ ] Connect temperature sensor to Raspberry Pi and display value on screen
    - [ ] Connect relay to Raspberry Pi and control it from the screen
- **Phase 2:** Buy the Gaggia and connect at least one sensor inside the machine and maybe one relay and figure out if I can control the machine
- **Phase 3:** Implement temperature control + manual settings + design the UI
- **Phase 4:** Implement pression control + manual settings + design the UI
- **Phase 5:** Implement Start/Stop coffee based by action and time + manual settings + design the UI
- **Phase 6:** Implement one profile + design the UI
- **Phase 7:** 3D impression of the case + design the UI
- **Phase 7:** Propose a selection of profile
- **To infinity, and beyond!:**
    - Wifi configuration
    - Over the air update
    - Cloud
    - Steam temperature control
    - Connected scale for espresso + brew by weight
    - Connected scale for grinder + connected plug
    - Customize your own Profile
    - Shot history
    - Preheat customisation
    - Create a marketplace of profile (by coffee brand, by user, by barista, etc.)

## Setup
### Server MCP
Add this configuration to your LLM tool (Claude, Cursor, LLM Studio, etc.):
```json
{
  "mcpServers": {
    "Coffee": {
      "url": "http://localhost:3000/mcp"
    }
  }
}
```

### Matter
Add to Apple Home, Google Home, Alexa, etc by scanning the QR code:

```log
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  █⠀▄▄▄▄▄⠀██▀▄█▄█⠀▄▄▄▄▄⠀█
  █⠀█⠀⠀⠀█⠀█▄▀▄⠀▀█⠀█⠀⠀⠀█⠀█
  █⠀█▄▄▄█⠀██⠀▀▀▄█⠀█▄▄▄█⠀█
  █▄▄▄▄▄▄▄█⠀█⠀▀⠀█▄▄▄▄▄▄▄█
  █▄⠀▄█⠀⠀▄▄⠀█▄█▄⠀⠀█▀█⠀█▀█
  ███▄⠀⠀▄▄▀██⠀▄⠀█▄█⠀⠀▀█▀█
  █▄▄▄▄██▄▄▄█▄██▀█⠀▄▄▀▄▀█
  █⠀▄▄▄▄▄⠀█⠀▄▄▀███▀⠀▄⠀█⠀█
  █⠀█⠀⠀⠀█⠀█▄⠀⠀▄▄⠀▄⠀▀▄⠀▀██
  █⠀█▄▄▄█⠀█⠀██⠀▀█⠀▀█⠀⠀▀⠀█
  █▄▄▄▄▄▄▄█▄█▄▄███▄██▄█▄█
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  QR code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=MT:Y.K90YDA13DARU3W910
```

## 🏗️ Development
### Requirements

- [Bun](https://bun.sh/)

##  Setup

```bash
$ bun installation
$ bun dev # serve with hot reload at localhost:3000  
```

## 🙇 Thanks
- [@Gaggimate](https://github.com/jniebuhr/gaggimate) for the open source code and all the instruction to mod the Gaggia
- [@gaggiuino](https://github.com/Zer0-bit/gaggiuino) for the old open source and all the community
- [@Lance Hedrick](https://www.youtube.com/@LanceHedrick) for discovering the Gaggimate and the Gaggia modding

