# 🇫🇷 Orb - _Made In France Gaggia mod_ 🇫🇷
![image](orb.jpg)
> Design-first, fully connected, all-TypeScript Gaggia mod. Bigger round screen, web dev-friendly stack ❤️.
---

## Why ?
I love coffee, coding, and electronics. I’m building this project from scratch because it’s fun. If you’re a web 
developer, you’ll feel right at home. I’m especially focused on a design with a large round touch display.

## Source
- [🖌️ Figma design discovery](https://www.figma.com/design/AHiLtSJ49nn0VO5oZbc940/Nuxt-UI-v3-•-Official-Design-Kit-•-Free--Community-?node-id=3523-8815&p=f&t=C1Ur5FfJ0Jg08B5x-0)

## Roadmap
> 💡 If you want to vote or suggest new idea go to [Github Discussions](https://github.com/moifort/orb/discussions/categories/ideas)
> 
- ⏳ **Phase 1:** Proof of Concept — ability to control at least one sensor, one relay, and a touchscreen
    - [x] Initialize NuxtJs project
    - [x] Buy components
        - [x] [Kit Raspberry Pi Zero 2W](https://fr.aliexpress.com/item/1005008267755917.html?spm=a2g0o.order_list.order_list_main.10.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **23€**
        - [x] [Touch Screen 5 inch 1080x1080](https://fr.aliexpress.com/item/1005005498872449.html?spm=a2g0o.order_list.order_list_main.30.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **126€**
        - [x] [K-Type M4 Thermocouple](https://fr.aliexpress.com/item/1005005496786289.html?spm=a2g0o.order_list.order_list_main.15.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **2€**
        - [x] [MAX31855 Temperature sensor board](https://fr.aliexpress.com/item/1005005008373588.html?businessType=ProductDetail&srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60912297260&aff_fcid=95a1e04e32ac448ea27c9f69c721219f-1757278656595-05401-_EuEbJO4&tt=CPS_NORMAL&aff_fsk=_EuEbJO4&aff_platform=shareComponent-detail&sk=_EuEbJO4&aff_trace_key=95a1e04e32ac448ea27c9f69c721219f-1757278656595-05401-_EuEbJO4&shareId=60912297260&businessType=ProductDetail&platform=AE&terminal_id=4f4c5c4072c3433a89a03e4f7aaeeab8&gatewayAdapt=glo2fra) - **5€**
        - [x] [2-Channel 5V Relay](https://fr.aliexpress.com/item/1005001903120199.html?spm=a2g0o.order_list.order_list_main.20.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **2€**
        - [x] [Dupont cables](https://fr.aliexpress.com/item/1005005501503609.html?spm=a2g0o.order_list.order_list_main.25.58785e5bD7hSzg&gatewayAdapt=glo2fra) - **1€**
    - [ ] Install on Raspberry Pi Zero in Chromium Kiosk Mode
    - [ ] Connect the touchscreen
    - [ ] Connect a temperature sensor to the Raspberry Pi and display the value on screen
    - [ ] Connect a relay to the Raspberry Pi and control it from the screen

- **Phase 2:** Purchase the Gaggia, add at least one sensor inside the machine (and possibly one relay)
- **Phase 3:** Implement temperature control + manual settings + design the UI
- **Phase 4:** Implement pressure control + manual settings + design the UI
- **Phase 5:** Implement Start/Stop coffee based on action and time + manual settings + design the UI
- **Phase 6:** Implement one profile + design the UI
- **Phase 7:** 3D-print the enclosure + design the UI
- **Phase 8:** Offer a selection of profiles

- **To infinity, and beyond!**
    - Wi-Fi configuration
    - Over-the-air (OTA) updates
    - Interface web
    - Interface mobile
    - Cloud 
    - Steam temperature control
    - Connected espresso scale + brew by weight
    - Connected grinder scale + smart plug
    - Create and customize your own profiles
    - Shot history
    - Preheat customization
    - Create a profile marketplace (by coffee brand, by user, by barista, etc.)

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

