/* ==========================================
   KPK Study Hub - Official JavaScript Engine
   ========================================== */

const classSubjectsData = {
    class1: [
        { name: "Nazira Quran", icon: "fa-quran", image:"https://drive.google.com/file/d/1HaYBvVeprMzjSGod5fm7NlQnAScUALWZ/view?usp=drive_link", link: "https://drive.google.com/file/d/1mPHFFKKKCTuRd2SEgokG27buRBgQvsA6/view?usp=drive_link" },
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/1awNyTKX_VFm1eUa8n5FBJhBgLGhyx8Y4/view?usp=drive_link", link: "https://drive.google.com/file/d/1shziun1dLStMZ_vm2aqhKpzeQFwWO3c1/view?usp=drive_link" },
        { name: "Drawing", icon: "fa-palette", image: "https://drive.google.com/file/d/1PBdJvBPk0VtBFxM1LQv-gmoppbSiyEYx/view?usp=drive_link", link: null },
        { name: "English", icon: "fa-book-alphabet", image: "https://drive.google.com/file/d/1FFgcHzIM5eUgCNvrSA_GY86YQJbZgkZ8/view?usp=drive_link", link: "https://drive.google.com/file/d/1GdFUj176BPBU1WE625rnEqe42xFl41Ou/view?usp=drive_link" },
        { name: "Pashto", icon: "fa-language", image: "https://drive.google.com/file/d/1OJrcHf5X48i3WEmVTby0ONPAPJ322UEl/view?usp=drive_link", link: "https://drive.google.com/file/d/1CyUwFu8iqOvGnq78_Q4E-T3DWce7LcSq/view?usp=drive_link" },
        { name: "Islamiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/15GVB97T2_aJCz0KT1usAMDlkivL_mN1h/view?usp=drive_link", link: "https://drive.google.com/file/d/16E1HbgqQpJM0xUTz9SfKO40yk35mt5mQ/view?usp=drive_link" },
    ],
    class2: [
        { name: "Nazira Quran", icon: "fa-quran", image: "https://drive.google.com/file/d/1PbHE5HdUlp2XQUOhWwofe287EBLRK-_q/view?usp=drive_link", link: "https://drive.google.com/file/d/14pxcCd7BJ5i-EAdOAHCl6U3PVGf_BuFH/view?usp=drive_link"},
        { name: "Drawing", icon: "fa-palette", image: "https://drive.google.com/file/d/1MefhuoBCSL50cpC68tPMxln3m4uVGdw3/view?usp=drive_link", link: "https://drive.google.com/file/d/1zWdhWq8indg5tBT-mA0nt5ThVfOpbF3X/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/1fACFNc7q5bqbgTH7IMGoJP_1LoMvNfzp/view?usp=drive_link", link: "https://drive.google.com/file/d/1PP6UWeeA1MHV55JJZzX1ijNuk5RHWA2D/view?usp=drive_link" },
        { name: "General Knowledge", icon: "fa-globe", image: "https://drive.google.com/file/d/1fSLK1CZV4I6XKAnLGizAMyuJNKxDXbbX/view?usp=drive_link", link: "https://drive.google.com/file/d/1sGowdFqriO39P3Ya3xSrphnoaBcvzkXe/view?usp=drive_link" },
        { name: "Islamiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1_8_0VkRaQnolq3R39oFXwVDZsPlvaEl_/view?usp=drive_link", link: "https://drive.google.com/file/d/1-xb9v6fogMl6w1JXXJDch0BYwKp3m8wf/view?usp=drive_link" }
    ],
    class3: [
        { name: "Nazira Quran", icon: "fa-quran", image: "https://drive.google.com/file/d/1mj8As3cJuFisGFeQ23-RU9fHj2Cm0Bjw/view?usp=drive_link", link: "https://drive.google.com/file/d/1Yv483PJO-w9PoYkdHWyJwIH2kYv_LTLW/view?usp=drive_link" },
        { name: "Pashto", icon: "fa-language", image: "https://drive.google.com/file/d/1CD28y4Z5mAEWAuATsKMyy8SSDGqVXzxH/view?usp=drive_link", link: "https://drive.google.com/file/d/1cpJZgsIpSQ07Wvv2Hls2IT9VyHlC7z_-/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1rCJWT5tWdeXyN8au3e_qG1Py6OhOXWXw/view?usp=drive_link", link: "https://drive.google.com/file/d/1yKZTIjZQIik2400uRf3DOf3rp_DB_2yd/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/12GZC6JXcp5qbxmBkIqtRjpQaQ4p-Xld1/view?usp=drive_link", link: "https://drive.google.com/file/d/1oNR8MTr0h1-zrON5evUX-EOAPMQ3o2kb/view?usp=drive_link" },
        { name: "General Knowledge", icon: "fa-flask", image: "https://drive.google.com/file/d/1zDn4Yjz97nXzyYz7-pTS9HSQMOFnC55t/view?usp=drive_link", link: "https://drive.google.com/file/d/1bf3MiZnC0YTsa9oXiRPWCrWRCcjjAJSh/view?usp=drive_link" },
        { name: "Drawing", icon: "fa-palette", image: "https://drive.google.com/file/d/1hjfn8y9QtVR_QO9kSETTCPGgCISFFPUU/view?usp=drive_link", link: "https://drive.google.com/file/d/1eSJPeAC3il8otV00yx2SkVUYC0rgxx3C/view?usp=drive_link" },
        { name: "Islamiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1aaQYf3s932mgVxpNReLiKlNYbp7rg2SY/view?usp=drive_link", link: "https://drive.google.com/file/d/1Yf2kAfGGssbXQvuAyxhjvNbWQ5XIHD8r/view?usp=drive_link" }
    ],
    class4: [
        { name: "Nazira Quran", icon: "fa-quran", image: "https://drive.google.com/file/d/1MUHcAckG9K2qPv4P1sSNa2r12I80qjng/view?usp=drive_link", link: "https://drive.google.com/file/d/1OFLFPrZ6tbe-YoHfKMrLKNcnSle2yARf/view?usp=drive_link" },
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/1vMj24oSIcGqp5AH8R27ILsz3HskkaLGg/view?usp=drive_link", link: "https://drive.google.com/file/d/1NdtS0RyurjTM-xRHt4E02aD8D4MNVjcr/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1nKdaE9ni6QckKxjmANOlcesbDOG5gHC3/view?usp=drive_link", link: "https://drive.google.com/file/d/1r-qPz6FcYKW5zICqG-o07O3OsKDc9e-Q/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/1gXBkLkxidePuX6cAs-CnrNkF4ZsBIkXO/view?usp=drive_link", link: "https://drive.google.com/file/d/1G9LrUv4D2kh49Za9YWJlBEDz0ErTYU7e/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/1jP6EzTqziDDMZgYy-HOor7k5CJRS7cdu/view?usp=drive_link", link: "https://drive.google.com/file/d/1pxqTMUlT25N1M08NsceXhJ-kgyhGlCZk/view?usp=drive_link" },
        { name: "Social Studies", icon: "fa-landmark", image: "https://drive.google.com/file/d/1kvakKwzTUU4jX13Eu0O5gsOhjMCp7Hoi/view?usp=drive_link", link: "https://drive.google.com/file/d/1A1V5Yo089ZXO-SAwdmbOKUuaarpv4k2_/view?usp=drive_link" },
        { name: "Pashto", icon: "fa-language", image: "https://drive.google.com/file/d/1vDL4t0fOS_7EWjhMPGwMWZwrXSIQ4uAo/view?usp=drive_link", link: "https://drive.google.com/file/d/11Y5XZOU583TlkbxnG4Jpsbz3Ug_Fq0Sk/view?usp=drive_link" },
        { name: "Islamiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1jHieWwucJlQZ8Y2yWFSl0bxzt3Ex5nHp/view?usp=drive_link", link: "https://drive.google.com/file/d/1mn-H3f9hH8GgcqCY2q3jdlkND8LJ5Rxq/view?usp=drive_link" },
    ],
    class5: [
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/1A5wa71pPrF1H1vqQTMVQg0kStlmvC3v3/view?usp=drive_link", link: "https://drive.google.com/file/d/15C00-D1nJlebgr2e0KBVjJOQH_iJOPHu/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1rOvZ3DaNXx-wjm13v2bFUK4hJz081a6n/view?usp=drive_link", link: "https://drive.google.com/file/d/1kPUVF9K-Sasg1HPFBBnObz5HyGdyG2CY/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/1AVQKXR-ieVQto5ecYHi7fpzWeb9ead5S/view?usp=drive_link", link: "https://drive.google.com/file/d/1h9gjis676lr5pOX0iGlh5t_YnbgTET0P/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/15RnJtodTG5mso9DzHc7RUTit-tpEomiz/view?usp=drive_link", link: "https://drive.google.com/file/d/1RKfGnhgA9_O-7qlRKWTCPnBU-ohZ-D06/view?usp=drive_link" },
        { name: "Social Studies", icon: "fa-landmark", image: "https://drive.google.com/file/d/1RjUhgUDkqVG1tFxvPKfshRRWkyIOYBcX/view?usp=drive_link", link: "https://drive.google.com/file/d/1tbLx4ASqJ7iIJDWPEgRZJlwsNZfuwuNS/view?usp=drive_link" },
        { name: "Islamyiat", icon: "fa-Kaaba", image: "https://drive.google.com/file/d/1jZEdMsOWs_kGKDS0A3_vpeFSODYHIh47/view?usp=drive_link", link: "https://drive.google.com/file/d/1MfHq9f0D4YfcLJ9Q870nbSKCLkq5QWmM/view?usp=drive_link" },
        { name: "Islamait Work book", icon: "fa-mosque", image: "https://drive.google.com/file/d/1TAmg0WwbQ82hoz5QC9D7SoGQVY4j2_J8/view?usp=drive_link", link: "https://drive.google.com/file/d/1BSozORPArc5fG1MRPFrOlJOEu7EFffzI/view?usp=drive_link" },
        { name: "Pashto", icon: "fa-language", image: "https://drive.google.com/file/d/1698idPfIRO7DpBCHh-0RJS2EHymE_msO/view?usp=drive_link", link: "https://drive.google.com/file/d/1JpAXMWh28mStCINQHcz44zs0TsDnZmeh/view?usp=drive_link" },
    ],
    class6: [
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/1LqrEICjfwTpXIe2U_XaZzKBpedRYr9yM/view?usp=drive_link", link: "https://drive.google.com/file/d/1ENJbbRMsqvd9k31ZMWqbUeA8Sifs1D6-/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/12Ey8tZaIIsqHDvgE-AjTxD4RLXatkktj/view?usp=drive_link", link: "https://drive.google.com/file/d/1f0XYyOKhgJjARISbv8dQ2lv3GuwO4jKe/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/111hUsoERnS-wePFK4DG3B_7nDbqkTPY5/view?usp=drive_link", link: "https://drive.google.com/file/d/1XIhDQDrLhXSKMdITnvDgmtsXuWohjwwa/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1b6wPpRsq1loNdpidhxiue8wJME_29oFj/view?usp=drive_link", link: "https://drive.google.com/file/d/1iYGa5Z182ueEcgTfzC9bG3qu6_zxAlJv/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/1ur_dXt7TSqiChdKN2g531b0Y0q0ud37g/view?usp=drive_link", link: "https://drive.google.com/file/d/1C34UqmeRm78UG6XcKuDb5z0ffQ4HjiAC/view?usp=drive_link" },
        { name: "Geography", icon: "fa-earth-asia", image: "https://drive.google.com/file/d/10FqIzOMCdbzw8H8pvHCwkq5RAZD8mcdO/view?usp=drive_link", link: "https://drive.google.com/file/d/1CivpsCIvUaceeIuvHQheo5T_71ZY6fAS/view?usp=drive_link" },
        { name: "Computer Science", icon: "fa-laptop-code", image: "https://drive.google.com/file/d/1yYU19GVeEN5e5JD1CvOGX0OTDZuy0TVu/view?usp=drive_link", link: "https://drive.google.com/file/d/168Oq5xkwh8aH-VSXphKDNtZJIA6IT5N_/view?usp=drive_link" },
        { name: "Pashto", icon: "fa-language", image: "https://drive.google.com/file/d/1UseGlQMI3wxDFlUijyneWM-Qi5DTWgHF/view?usp=drive_link", link: "https://drive.google.com/file/d/1xlRzYfRXqjJOuhnNnf7z21OO9XsZc37Z/view?usp=drive_link" },
        { name: "Arabic", icon: "fa-quran", image: "https://drive.google.com/file/d/1mAjJOEdqBFDAzGORzM2yTOb-IeAcR7KT/view?usp=drive_link", link: "https://drive.google.com/file/d/1g6rPimbBR7Ke6TL9FEPXuRm4LZUbhTPF/view?usp=drive_link" },
        { name: "Islamyiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1FNayTBVOTpLpgxy8RANT3ewD1Q_qkD32/view?usp=drive_link", link: "https://drive.google.com/file/d/1T0oIALlcl4CfIRDeoRQL08C8XBqrlm8B/view?usp=drive_link" },
    ],
    class7: [
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/1t2LESFboM88MrwT6bfkm8D_QYAN5c33N/view?usp=drive_link", link: "https://drive.google.com/file/d/1taV5pfc4QQxFinD5fGFVUuW0kEna6PKn/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/1wTXJqzCH3G6NYWHsWj5xUHn9EXspfK1M/view?usp=drive_link", link: "https://drive.google.com/file/d/1c5nyhuWVD2Z51yGLX7w_ULpGOiMj4Wlc/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/1VjTsFdJCmx60tce-kvPVZ0VU3qcTlPDo/view?usp=drive_link", link: "https://drive.google.com/file/d/1D4jzBo7e-1kTKq3MGuiSm-giDzhQxh49/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1ZTXR_j4btgd6qHQbzfQA-5Hi5JwF2Z43/view?usp=drive_link", link: "https://drive.google.com/file/d/1M2Je1eonXpAih3GSz1b3wbrZ4OS7gtkt/view?usp=sharing" },
        { name: "Drawing", icon: "fa-palette", image: "https://drive.google.com/file/d/17fyE-JxL8k5QOOcES1nGVQPxhAIr4lkE/view?usp=drive_link", link: "https://drive.google.com/file/d/1NgfTmEfo6NCXyPEs78YMK9f-Tw8IH6IS/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/18gYll5rZBh6SoiqLUdHr-yURmz-LM_d6/view?usp=drive_link", link: "https://drive.google.com/file/d/1oslSPTvYqqT3YOoxCI6Ttv2EFytTMI_M/view?usp=drive_link" },
        { name: "Islamyiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1juANTHUOlTLhLqU7eprR0p7g4glSAh8D/view?usp=drive_link", link: "https://drive.google.com/file/d/1O8faKEl_Ib24h2T0k_fesVGAghLRSIls/view?usp=drive_link" },
        { name: "Geography", icon: "fa-earth-asia", image: "https://drive.google.com/file/d/11-ka0D-0S_vrELY6LlgMu8DQC-54Ycpd/view?usp=drive_link", link: "https://drive.google.com/file/d/1AcWIBI5ywL6MRCVaFiZ-rRwvZ6pNOhw_/view?usp=drive_link" },
        { name: "Computer Science UM", icon: "fa-laptop-code", image: "https://drive.google.com/file/d/1cFmgHEYKq1s_mObqmuhNdqGvwZpSElIE/view?usp=drive_link", link: "https://drive.google.com/file/d/1xkQGns2Q_i7I69msgp5K7dP2ChVP7n1N/view?usp=drive_link" },
        { name: "Computer Education", icon: "fa-laptop-code", image: "https://drive.google.com/file/d/1uvDmtjKJO3ZKkjcvxj9NLaR33vSfwEto/view?usp=drive_link", link: "https://drive.google.com/file/d/19ewddk3QbmgPherQehuxMz2mKhxsD9B_/view?usp=drive_link" },
        { name: "Arabic", icon: "fa-quran", image: "https://drive.google.com/file/d/1JUeg7LanU81W4HVHr1saJhq7bN3h14BD/view?usp=drive_link", link:"https://drive.google.com/file/d/1Icz6Ts87ehq5rbt6chs5nAGcF5sjNdxV/view?usp=drive_link"},
    ],
    class8: [
        { name: "Mathematics", icon: "fa-calculator", image: "https://drive.google.com/file/d/10-Ny7dwT3jfr3LdAmoWWAlc6DBo5vFTH/view?usp=drive_link", link: "https://drive.google.com/file/d/1e_lECnpha2DMPxhiBdvT6S92oGyWb28R/view?usp=drive_link" },
        { name: "General Science", icon: "fa-flask", image: "https://drive.google.com/file/d/1NpyT48Q22HMttQRNDpubFNqThLqFKCCU/view?usp=drive_link", link: "https://drive.google.com/file/d/1TvlbMyL-9sClFCY7PK7hXctIoTXuO1dq/view?usp=drive_link" },
        { name: "Drawing", icon: "fa-palette", image: "https://drive.google.com/file/d/1iZr_iHMdz2qPCU-ONx-r7Mydr2ob5-pA/view?usp=drive_link", link: "https://drive.google.com/file/d/1KwQNrXGl6sU2JEOx2fU93t6Hq_60i-hJ/view?usp=drive_link" },
        { name: "English", icon: "fa-book", image: "https://drive.google.com/file/d/1giBciWVNZneiO4HnuyuTDAFedBX2TLBc/view?usp=drive_link", link: "https://drive.google.com/file/d/1TvCodKwlKYybovR1WuhMeMvgOGEVO5xg/view?usp=drive_link" },
        { name: "Urdu", icon: "fa-book-open", image: "https://drive.google.com/file/d/1ZQrdPR2x4tmWFFhUB4SYPcm1uGGHdo3t/view?usp=drive_link", link: "https://drive.google.com/file/d/1OSWUDODREhxKdC9jPSIkpFKHhDJ0e9Nw/view?usp=drive_link" },
        { name: "Islamyiat", icon: "fa-kaaba", image: "https://drive.google.com/file/d/1LUNHdyG0pUDzdCFdLRtk_UZrGzSrRzjA/view?usp=drive_link", link: "https://drive.google.com/file/d/1AfLth9MA90ZCadSC415ihePanTUnnSET/view?usp=drive_link" },
        { name: "Arabic", icon: "fa-quran", image: "https://drive.google.com/file/d/1-8jIeCIPdBD8diEHT68Xnk6e3dBvd98y/view?usp=drive_link", link: "https://drive.google.com/file/d/1TUKkcHFEdLg5IRzKwFI7qPeQr5TDzlx2/view?usp=drive_link" },
        { name: "Geography", icon: "fa-earth-asia", image: "https://drive.google.com/file/d/1OtZXECCLN7DHhwDSQtc_jijQi7OJzrNQ/view?usp=drive_link", link: "https://drive.google.com/file/d/1Hs8q-dSPyzKT-LVQ28dyh3Q_GyYIlI4R/view?usp=drive_link" },
        { name: "History", icon: "fa-earth-asia", image: "https://drive.google.com/file/d/19ED3-AjDmkWvK3mTAtbTQagXVPADMHAe/view?usp=drive_link", link: "https://drive.google.com/file/d/1Jq_7I6J4BoJAC-NhKyZhOU3R0qIlzVXk/view?usp=drive_link" },
        { name: "Computer Science UM", icon: "fa-laptop-code", image: "https://drive.google.com/file/d/16hkFcdgzj2rZC79ukm_jYlTFZdC4Mw9n/view?usp=drive_link", link: "https://drive.google.com/file/d/1HbInrIeSWVwIzefRQ4j8FM4qKmSwCIDn/view?usp=drive_link" },
        { name: "Computer Science EM", icon: "fa-laptop-code", image: "https://drive.google.com/file/d/1TenB7RlBr5AS40DUu8xTumOROhOoTfyo/view?usp=drive_link", link: "https://drive.google.com/file/d/1aeJrlOJEiG16hBD4fn5PNIij7mXx5hbw/view?usp=drive_link" },
    ],
    // Class 9th book yaini nichy book kii jo link deya hain woo 100% tek haiin. jo baki  book+cover rehty hain wo upload karny hain aor aisy elawa jo 9th book ky nichy jo classes ki link hain wos pr click karky TEST karna REHTA hain
    class9_books: [
        { name: "Biology", icon: "fa-heart-pulse", image: null, link: "https://drive.google.com/file/d/1WHvEVI4JiDL6yj_tXZQzzcxQmMsZynyL/view" },
        { name: "Chemistry", icon: "fa-flask", image: null, link: "https://drive.google.com/file/d/1WPzCc9Vq1ZgmsIfCZIMrw3BbDzSEKTFp/view" },
        { name: "Physics", icon: "fa-atom", image: null, link: "" },
        { name: "Mathematics", icon: "fa-square-root-variable", image: null, link: "https://drive.google.com/file/d/1ghDdYj7iOzpuSzCeYbItjMmJT9kBw8DX/view?usp=drivesdk" },
        { name: "Computer Science", icon: "fa-laptop-code", image: null, link: null },
        { name: "English", icon: "fa-book", image: null, link: "https://drive.google.com/file/d/1WfcPlb5JKTuxzq_l1L953CLpyo-hWSwh/view?usp=drivesdk" },
        { name: "Islamiat Lazimi", icon: "fa-mosque", image: null, link: "https://drive.google.com/file/d/1g7lVwV0b-C8H4ir2jqqZMfVy6G7_vyCd/view?usp=drivesdk" },
        { name: "Urdu", icon: "fa-book-open", image: null, link: "https://drive.google.com/file/d/1gveAJxsrPqLU3ivpdpIneOAKlfOgexGd/view?usp=drivesdk" },
        { name: "Pak Study", icon: "fa-flag", image: null, link: null },
    ],
    class9_notes: [
        { name: "Biology Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Chemistry Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Physics Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Mathematics Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "English Notes", icon: "fa-file-lines", image: null, link: null }
    ],
    past_papers: [
        { name: "Bise Mardan Class 9th Past Papers", icon: "fa-file-pdf", image: null, link: "https://drive.google.com/file/d/1WZXaUTy30V38h8B6ozxqt5rPbWwx8VfJ/view?usp=drivesdk" },
        { name: "Bise Mardan Class 10th Past Papers", icon: "fa-file-pdf", image: null, link: "https://drive.google.com/file/d/1WbQkHwi7hUS7RTi9zt8mf8V3QEDgMMfd/view?usp=drivesdk" },
        { name: "Bise Mardan  Class 1st/2nd Year Past Papers", icon: "fa-file-pdf", image: null, link: "https://drive.google.com/file/d/1fO6MMoQPpD1lPYPnWhjTidsaRVpreS0E/view?usp=drivesdk" },
        { name: "Bise Peshawar annual 1 2026 1st Year Paper", icon: "fa-file-pdf", image: null, link: "https://drive.google.com/uc?export=download&id=1CI8ZogjmJomanEfn7TpVW6TU1K0l-Xla" },
        { name: "Bise Peshawar annual 1 2026 2nd Year Paper", icon: "fa-file-pdf", image: null, link: "https://drive.google.com/uc?export=download&id=1CKDlvau9WywxRvdT3bC-1eHvRJB1duvx" },
    ],
    board_results: [
        { name: "Mardan Board 2026 Result", icon: "fa-award", image: null, link: null },
        { name: "Mardan Board 2022 Result", icon: "fa-award", image: null, link: null },
        { name: "Kohat Board 2026 Result", icon: "fa-award", image: null, link: null },
        { name: "Kohat Board 2022 Result", icon: "fa-award", image: null, link: null }
    ],
    class10_books: [
        { name: "Biology", icon: "fa-dna", image: null, link: null },
        { name: "Chemistry", icon: "fa-flask", image: null, link: "https://drive.google.com/file/d/1hEQVOKRHqOkpSzraz8uHxQyO1fXXvunz/view?usp=drivesdk" },
        { name: "Physics", icon: "fa-atom", image: null, link: "https://drive.google.com/file/d/1XU026Ycq5DByco0NyGkzatt7JfG9ZhA4/view?usp=drivesdk" },
        { name: "Mathematics", icon: "fa-square-root-variable", image: null, link: "https://drive.google.com/file/d/1gLAc3Fd1JfM11bg4To-38b7LRUx8lg5v/view?usp=drivesdk" },
        { name: "English", icon: "fa-book", image: null, link: "https://drive.google.com/file/d/1hZ6MZ2mV5Pf68pRPCjPDcv8WTwxpkEXy/view?usp=drivesdks" },
        { name: "Islamiat Lazimi", icon: "fa-mosque", image: null, link: "https://drive.google.com/file/d/1g7lVwV0b-C8H4ir2jqqZMfVy6G7_vyCd/view?usp=drivesdk" },
        { name: "Urdu", icon: "fa-book-open", image: null, link: "https://drive.google.com/file/d/1hRWnvdzSn0HZJ6MIS0x5DjN3C2dWE1jK/view?usp=drivesdk" },
        { name: "Pak Study", icon: "fa-flag", image: null, link: "https://drive.google.com/file/d/1hhLD6KG-iOubOn_jK7-bxlpCNvaZbKlz/view?usp=drivesdk" },
    ],
    class10_notes: [
        { name: "Biology Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Chemistry Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Physics Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Mathematics Notes", icon: "fa-file-lines", image: null, link: null }
    ],
    class11_books: [
        { name: "Biology", icon: "fa-dna", image: null, link: "https://drive.google.com/file/d/1fS1vmdYnycUqufDmI7dploc-6DaMYKuN/view?usp=drivesdk" },
        { name: "Chemistry", icon: "fa-flask", image: null, link: "https://github.com/faizantrader156/KpK-study-hub-app/releases/download/class11chemistry/Chemistry_Class11_KP_TextBookBoard_Peshawar.www.tayarri.com.1.pdf" },
        { name: "Physics", icon: "fa-atom", image: null, link: null },
        { name: "Mathematics", icon: "fa-square-root-variable", image: null, link: null },
        { name: "English", icon: "fa-book", image: null, link: null }
    ],
    class11_notes: [
        { name: "Biology Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Chemistry Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Physics Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Mathematics Notes", icon: "fa-file-lines", image: null, link: null }
    ],
    class12_books: [
        { name: "Biology", icon: "fa-dna", image: null, link: "https://drive.google.com/file/d/1fmQ4JL-dDdM5eYlRLPEbjHTX0lMN2GX8/view?usp=drivesdk" },
        { name: "Chemistry", icon: "fa-flask", image: null, link: "https://drive.google.com/file/d/1fySa3wCxFyx-2B4I79gCeYmDi136VIUK/view?usp=drivesdk" },
        { name: "Physics", icon: "fa-atom", image: null, link: null },
        { name: "Mathematics", icon: "fa-square-root-variable", image: null, link: null },
        { name: "English", icon: "fa-book", image: null, link: null }
    ],
    class12_notes: [
        { name: "Biology Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Chemistry Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Physics Notes", icon: "fa-file-lines", image: null, link: null },
        { name: "Mathematics Notes", icon: "fa-file-lines", image: null, link: null }
    ]
};

const categoryTitlesMap = {
    class1: "1st Class Books", class2: "2nd Class Books", class3: "3rd Class Books",
    class4: "4th Class Books", class5: "5th Class Books", class6: "6th Class Books",
    class7: "7th Class Books", class8: "8th Class Books",
    class9_books: "9th Class Textbooks", class9_notes: "9th Class Notes & Guides",
    class10_books: "10th Class Textbooks", class10_notes: "10th Class Notes & Guides",
    class11_books: "11th Class (1st Year) Books", class11_notes: "11th Class (1st Year) Notes",
    class12_books: "12th Class (2nd Year) Books", class12_notes: "12th Class (2nd Year) Notes",
    past_papers: "All KPK Boards Past Papers", board_results: "Official Board Results Archive"
};

let lastBackPressTime = 0;

// Multi-Theme Selector Function (Supports Dark, Light, and 5+ Vibrant Themes)
function setAppTheme(themeName) {
    const body = document.body;
    // Remove all existing theme classes
    body.classList.remove('dark-theme', 'light-theme', 'emerald-theme', 'blue-theme', 'purple-theme', 'orange-theme', 'ruby-theme');
    // Add chosen theme
    body.classList.add(themeName);
    localStorage.setItem('kpk_app_theme', themeName);
    toggleSidebarMenu();
}

// Load saved theme on startup
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('kpk_app_theme') || 'dark-theme';
    document.body.classList.add(savedTheme);

    setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) splash.classList.add('fade-out');
    }, 2500);

    loadHistory();
});

function formatThumbnailUrl(url) {
    if (!url) return null;
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w600`;
    }
    return url;
}

function createSubjectCardElement(item, index, catKey = '') {
    const name = item.name;
    const icon = item.icon || 'fa-book';
    const link = item.link;
    const thumbUrl = formatThumbnailUrl(item.image);

    const card = document.createElement('div');
    card.className = "subject-card";
    card.onclick = link ? () => openPDF(name, link) : () => showCustomAlert("Coming Soon!", name + " PDF is currently being prepared.");

    const bgClass = catKey === 'past_papers' ? `past-paper-bg${(index % 4) + 1}` : '';

    if (thumbUrl) {
        card.innerHTML = `
            <div class="sc-img ${bgClass}">
                <img src="${thumbUrl}" alt="${name}" class="sc-book-cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <div class="sc-fallback-icon" style="display:none;"><i class="fa-solid ${icon}"></i></div>
            </div>
            <div class="sc-title">${name}</div>`;
    } else {
        card.innerHTML = `
            <div class="sc-img ${bgClass}"><i class="fa-solid ${icon}"></i></div>
            <div class="sc-title">${name}</div>`;
    }
    return card;
}

function hideGlobalHeader() {
    const navbar = document.querySelector('.navbar');
    const searchBox = document.querySelector('.search-box');
    if (navbar) navbar.style.display = 'none';
    if (searchBox) searchBox.style.display = 'none';
}

function showGlobalHeader() {
    const navbar = document.querySelector('.navbar');
    const searchBox = document.querySelector('.search-box');
    if (navbar) navbar.style.display = 'flex';
    if (searchBox) searchBox.style.display = 'block';
}

function showCategory(catKey) {
    hideAllSections();
    hideGlobalHeader();
    const container = document.getElementById('subjectViewContainer');
    const grid = document.getElementById('subjectGridCards');
    const title = document.getElementById('subjectSectionTitle');

    grid.innerHTML = "";
    title.innerHTML = `<i class="fa-solid fa-book-open"></i> ${categoryTitlesMap[catKey] || catKey}`;

    (classSubjectsData[catKey] || []).forEach((item, index) => {
        grid.appendChild(createSubjectCardElement(item, index, catKey));
    });

    container.classList.remove('hidden-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPDF(title, url) {
    saveToHistory(title, url, 'view');
    loadHistory();
    window.open(url, '_blank');
}

window.addEventListener('popstate', function () {
    const currentTime = new Date().getTime();
    const mainHome = document.getElementById('mainHomeSection');

    if (mainHome && mainHome.classList.contains('hidden-section')) {
        showMainHome();
        history.pushState(null, '', window.location.href);
        return;
    }

    if (currentTime - lastBackPressTime < 2000) {
        if (navigator.app && navigator.app.exitApp) {
            navigator.app.exitApp();
        } else {
            window.close();
        }
    } else {
        lastBackPressTime = currentTime;
        showCustomAlert("Exit App", "Press back again to exit KPK Study Hub");
        history.pushState(null, '', window.location.href);
    }
});
history.pushState(null, '', window.location.href);

function showCustomAlert(title, message) {
    document.getElementById('alertTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertModal').classList.remove('hidden-modal');
}

function closeAlertModal() {
    document.getElementById('alertModal').classList.add('hidden-modal');
}

function showMainHome() {
    hideAllSections();
    showGlobalHeader();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    document.getElementById('mainHomeSection').classList.remove('hidden-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHistorySection() {
    hideAllSections();
    hideGlobalHeader();
    loadHistory();
    document.getElementById('historySection').classList.remove('hidden-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideAllSections() {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('hidden-section'));
}

function toggleSidebarMenu() {
    document.getElementById('sidebarMenu').classList.toggle('hidden-menu');
}

function saveToHistory(title, url, status = 'view') {
    let history = JSON.parse(localStorage.getItem('kpk_pdf_history')) || [];
    history = history.filter(item => item.url !== url);
    history.unshift({ title, url, date: new Date().toLocaleDateString(), status });
    localStorage.setItem('kpk_pdf_history', JSON.stringify(history));
}

function loadHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    let history = JSON.parse(localStorage.getItem('kpk_pdf_history')) || [];

    if (history.length === 0) {
        historyList.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">No opened or downloaded PDFs in history yet.</p>`;
        return;
    }

    let html = '';
    history.forEach((item, index) => {
        html += `
            <div class="history-card">
                <div style="flex:1; padding-right:10px;">
                    <strong>${item.title}</strong><br>
                    <small style="color:#7f8c8d;">Opened: ${item.date}</small>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <a href="${item.url}" target="_blank" class="btn-open-sm">Open</a>
                    <button class="btn-delete-sm" onclick="deleteHistoryItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
    });
    historyList.innerHTML = html;
}

function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('kpk_pdf_history')) || [];
    history.splice(index, 1);
    localStorage.setItem('kpk_pdf_history', JSON.stringify(history));
    loadHistory();
}

function filterBooks() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    const subjectView = document.getElementById('subjectViewContainer');
    const mainHome = document.getElementById('mainHomeSection');

    if (subjectView && !subjectView.classList.contains('hidden-section') && !subjectView.dataset.isGlobalSearch) {
        document.querySelectorAll('#subjectGridCards .subject-card').forEach(card => {
            card.style.display = card.innerText.toLowerCase().includes(input) ? "" : "none";
        });
        return;
    }

    if (input === "") {
        if (subjectView && subjectView.dataset.isGlobalSearch) {
            delete subjectView.dataset.isGlobalSearch;
            subjectView.classList.add('hidden-section');
            mainHome.classList.remove('hidden-section');
        }
        document.querySelectorAll('.grid-card, .special-past-paper-card, div[onclick*="showCategory"]').forEach(card => card.style.display = "");
        return;
    }

    let cards = document.querySelectorAll('.grid-card, .special-past-paper-card, div[onclick*="showCategory"]');
    let visibleHomeCards = 0;
    cards.forEach(card => {
        let match = card.innerText.toLowerCase().includes(input);
        card.style.display = match ? "" : "none";
        if (match) visibleHomeCards++;
    });

    if (visibleHomeCards === 0) {
        const grid = document.getElementById('subjectGridCards');
        const title = document.getElementById('subjectSectionTitle');
        grid.innerHTML = "";
        title.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Search Results for "${input}"`;

        let foundCount = 0;
        Object.keys(classSubjectsData).forEach(catKey => {
            const label = categoryTitlesMap[catKey] || catKey;
            classSubjectsData[catKey].forEach((item, idx) => {
                if (item.name.toLowerCase().includes(input) || label.toLowerCase().includes(input)) {
                    const taggedItem = { ...item, name: `${item.name} (${label.replace(' Books', '').replace(' Textbooks', '')})` };
                    grid.appendChild(createSubjectCardElement(taggedItem, idx, catKey));
                    foundCount++;
                }
            });
        });

        if (foundCount === 0) {
            grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:30px; color:#aaa;">No matching books or papers found.</p>`;
        }

        mainHome.classList.add('hidden-section');
        hideGlobalHeader();
        subjectView.dataset.isGlobalSearch = "true";
        subjectView.classList.remove('hidden-section');
    } else if (subjectView && subjectView.dataset.isGlobalSearch) {
        delete subjectView.dataset.isGlobalSearch;
        subjectView.classList.add('hidden-section');
        showGlobalHeader();
        mainHome.classList.remove('hidden-section');
    }
}