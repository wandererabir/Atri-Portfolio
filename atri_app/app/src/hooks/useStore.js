import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Divnav": {
      "callbacks": {
        "onClick": []
      }
    },
    "Flexnav": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Divhero": {
      "callbacks": {}
    },
    "Flexhero": {
      "callbacks": {}
    },
    "Divherocontent": {
      "callbacks": {}
    },
    "Divheroheading": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Divheroimage": {
      "callbacks": {}
    },
    "Divtrusted": {
      "callbacks": {}
    },
    "Flextrusted": {
      "callbacks": {}
    },
    "Divtext": {
      "callbacks": {}
    },
    "Flextrustedlogo": {
      "callbacks": {}
    },
    "Divservices": {
      "callbacks": {}
    },
    "Flexservices": {
      "callbacks": {}
    },
    "Flexserviceshead": {
      "callbacks": {}
    },
    "Flexservicegrid": {
      "callbacks": {}
    },
    "Divgrid1": {
      "callbacks": {}
    },
    "Flexgrid1": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Divgrid2": {
      "callbacks": {}
    },
    "Flexgrid2": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Divgrid3": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Divprojects": {
      "callbacks": {}
    },
    "FlexHead": {
      "callbacks": {}
    },
    "FlexMainHeading": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flexslider": {
      "callbacks": {}
    },
    "Flexgrid": {
      "callbacks": {}
    },
    "FlexSlider1": {
      "callbacks": {}
    },
    "FlexImageT1": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "FlexSlider2": {
      "callbacks": {}
    },
    "FlexImageT2": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Divblogs": {
      "callbacks": {}
    },
    "Flexblogs": {
      "callbacks": {}
    },
    "FlexHeading": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "blogs": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "divme": {
      "callbacks": {}
    },
    "Flexme": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Divexp": {
      "callbacks": {}
    },
    "Flexexp": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Divtest": {
      "callbacks": {}
    },
    "Flextest": {
      "callbacks": {}
    },
    "FlextestH": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Link1": {
      "custom": {
        "text": "Abir Paul",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link6": {
      "custom": {
        "text": "Book a call",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Headinghero1": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Headinghero2": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Headinghero3": {
      "custom": {
        "text": "Hi! I’m Abir, a Full Stack Developer based in India. I create user-friendly interfaces for better performances."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link23": {
      "custom": {
        "text": "Download CV",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Imagehero": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBoxtrusted": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0c235209438ffca029b_Group%20336.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0ccdbeafadf1a24d34a_Group%20333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0c238e88c2e55fe84cf_Group%20335.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextS2": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextS1": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Imagegrid1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584362e74acfa6b75398_Group%2051.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Textgrid1": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid3": {
      "custom": {
        "text": "• Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid1": {
      "custom": {
        "text": "• Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid2": {
      "custom": {
        "text": "• Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Imagegrid2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843b6409375f7c23f2b_Group%2017.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid22": {
      "custom": {
        "text": "• Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid21": {
      "custom": {
        "text": "• Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid23": {
      "custom": {
        "text": "• Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Imagegrid3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435ceaed068dde60ca_Group%2016.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid32": {
      "custom": {
        "text": "•   Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid31": {
      "custom": {
        "text": "•  Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextPgrid33": {
      "custom": {
        "text": "• Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link24": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcc78ec31466630c033f_image_processing20200129-19798-1k8ponz%202-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "PRODUCT  DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link25": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcd635f7f176db9fef1e_image_processing20200129-19798-1k8ponz%203-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Maize Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link26": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link29": {
      "custom": {
        "text": "View all",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link34": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link51": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link52": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link53": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link54": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "April 16, 2021 • 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link55": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "Software Developer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "• April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3a74dfa369ea2e92a_Group%2084.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "Senior Product Developer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3f70370b7efe8c560_Group%2085.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab33450e64d2fa55138_Group%2086.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "• 2009 - 2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "• 2013 - 2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "• 2013 - 2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "📚Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/604788d804dfe4ec1de7bb97_image-1-compressed-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff6a53da27356854576b920_Group%2058.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
