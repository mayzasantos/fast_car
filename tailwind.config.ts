import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      brand:{
        1:"#4529E6",
        2:"#5126EA",
        3:"#B0A6F0",
        4:"#EDEAFD",
      },

      grey:{
        0:"#0B0D0D",
        1:"#212529",
        2:"#495057",
        3:"#868E96",
        4:"#ADB5BD",
        5:"#CED4DA",
        6:"#DEE2E6",
        7:"#E9ECEF",
        8:"#F1F3F5",
        9:"#F8F9FA",
        10:"#FDFDFD",
        whiteFixed:"#FFFFFF"
      },

      feedback:{
        alert_1:"#CD2B31",
        alert_2: "#FDD8D8",
        alert_3: "#FFE5E5",
        sucess_1:"#18794E",
        sucess_2:"#CCEBD7",
        sucess_3:"#DDF3E4"
      },

      random:{
        random_1:"#E34D8C",
        random_2:"#C04277",
        random_3:"#7D2A4D",
        random_4:"#7000FF",
        random_5:"#6200E3",
        random_6:"#36007D",
        random_7:"#349974",
        random_8:"#2A7D5F",
        random_9:"#153D2E",
        random_10:"#6100FF",
        random_11:"#5700E3",
        random_12:"#30007D",
      },

     
    }
  },
  plugins: [],
}
export default config
