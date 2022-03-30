import React, { Component } from "react"
import Faq from "react-faq-component"

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Is it a contract-based business type?",
      content: `
            Yes and No! 
            Yes, because once subscribed, you're able to add as many features requests to your queue as you'd like, and they will delivered one by one, and I'll be paid monthly with a small retainer fee.
            And No, because if you only want one-time service, you can't add more features requests to your queue. So, You'll only pay once. That's it!
        `,
    },
    {
      title: "How fast will I have my requests responded?",
      content: `
            On average, most requests are completed in just a week. However, more complex requests can take longer.
        `,
    },
    {
      title: "Who are the designers and Developers?",
      content: `
       hey! WebContract is an Agency of ONE. This means you'll work directly with me, founder of WebContract (Design + Development). And I only work with at least One or Two Clients per month to ensure that you get the best possible service.
       `,
    },
    {
      title:
        "Do you offer any discount for those who want to work with a Retainer fee?",
      content: `
       YES! Of Course, If you want to work with me, you will get a discount for a the Initial Fee of 15%.
       `,
    },
    {
      title: "How do I request Features and Design?",
      content: `
       WebContract offers a ton of flexibility in how you request features using Slack. Some common ways clients request features and designs is directly via Slack, sharing Google docs or wireframes (Figma), or even recording a brief video (for those who prefer not to write their briefs out).
       `,
    },
    {
      title: "Who are the designers and Developers?",
      content: `
       hey! WebContract is an Agency of ONE. This means you'll work directly with me, founder of WebContract (Design + Development). And I only work with at least One or Two Clients per month to ensure that you get the best possible service.
       `,
    },

    {
      title: "Are there any contracts to use your service?",
      content: `
      You can CANCEL AT ANY TIME!
       `,
    },
  ],
}

const styles = {
  bgColor: "#F5F5F5",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowTitleTextSize: "16px",
  rowContentTextSize: "15px",
  rowContentColor: "#858585",
  rowContentPaddingBottom: "20px",
  // arrowColor: "red",
}

const FAQs = () => {
  return (
    <div className="">
      <Faq styles={styles} data={data} />
    </div>
  )
}

export default FAQs
