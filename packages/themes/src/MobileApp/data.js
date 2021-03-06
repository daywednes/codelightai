import * as Yup from "yup";

import MapMarker from "@pagerland/icons/src/line/MapMarker";
import Phone from "@pagerland/icons/src/line/Phone";
import Envelope from "@pagerland/icons/src/line/Envelope";
import FacebookF from "@pagerland/icons/src/line/FacebookF";
import Instagram from "@pagerland/icons/src/line/Instagram";
import Youtube from "@pagerland/icons/src/line/Youtube";

import CheckCircle from "@pagerland/icons/src/line/CheckCircle";
import Gift from "@pagerland/icons/src/line/Gift";
import Coffee from "@pagerland/icons/src/line/Coffee";
import Medal from "@pagerland/icons/src/line/Medal";
import LightbulbAlt from "@pagerland/icons/src/line/LightbulbAlt";

import textToMultiline from "@pagerland/common/src/utils/textToMultiline";

import firstFuture from "./assets/frist-feature.svg";
import secondFuture from "./assets/second-feature.svg";
import thirdFuture from "./assets/third-feature.svg";

import Phone1x2 from "./assets/screenshots/Phone-1@2x.png";

import male from "./assets/clients/photo-male.jpg";
import malex2 from "./assets/clients/photo-male@2x.jpg";
import female from "./assets/clients/photo-female.jpg";
import femalex2 from "./assets/clients/photo-female@2x.jpg";

import DocumentAnalysisIcon from "@pagerland/icons/src/line/DocumentAnalysis";
import FacialRegconitionIcon from "@pagerland/icons/src/line/FacialRegconition";
import LivenessDetectionIcon from "@pagerland/icons/src/line/LivenessDetection";

import Blueprint from "./assets/ourwork/blueprint.jpg";
import Body from "./assets/ourwork/body.jpg";
import Face from "./assets/ourwork/face.jpg";
import Lane from "./assets/ourwork/lane.jpg";
import Lito from "./assets/ourwork/lito.jpg";
import Rada from "./assets/ourwork/rada.jpg";
import RealEstate from "./assets/ourwork/real-estate.jpg";
import Scores from "./assets/ourwork/scores.jpg";
import Screens from "./assets/ourwork/screens.jpg";
import Seg51 from "./assets/ourwork/seg51.jpg";
import Segm from "./assets/ourwork/segm.jpg";
import Segmentation from "./assets/ourwork/segmentation.jpg";
import Siro from "./assets/ourwork/siro.jpg";
import Trafficlights from "./assets/ourwork/trafficlights.jpg";
import Vehicles from "./assets/ourwork/vehicles.jpg";

export default {
  title: "Mobile App",
  navbar: {
    links: [
      {
        to: "",
        label: "Home",
      },
      {
        to: "about",
        label: "Computer Vision",
      },
      {
        to: "features",
        label: "Annotations",
      },

      {

        to: 'screens',
        label: 'Output',

      },
      {
        /*
        to: 'clients',
        label: 'Clients',
      */
      },
      {
        /*
        to: 'support',
        label: 'Support',
      */
      },
      {
        /*
        to: 'pricing',
        label: 'Pricing',
      */
      },
      {
        /*
        to: 'contact',
        label: 'Contact',
      */
      },
    ],
    actions: [
      {
        href: "http://mypags.app",
        label: "Start free trial",
      },
    ],
  },
  welcome: {
    title: "Codelight.ai",
    text: `We offer computer vision services and high quality data annotations`,
  },
  footer: {
    section1: {
      text: `Find us on our social media pages`,
    },
    contact: {
      title: "Contact",
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(
            `159 Bel Ayre Dr, Santa Clara, CA\nUnited States`
          ),
        },
        {
          icon: Phone,
          text: "(262) 555-0131",
        },
        {
          icon: Envelope,
          text: "contact@codelight.ai",
        },
      ],
    },
    section3: {
      title: "",
      text: ``,
    },
  },
  about: {
    title: "Computer vision services we offer",
    text: `API provided as a friendly copy/paste script or SDK supported for web, Android, IOS`,
    features: [
      {
        id: "feature1",
        IconProps: {
          icon: FacialRegconitionIcon,
          gradient: "tertiary",
        },
        title: "Facial Recognition",
        text: "Face Comparison, Face search and risky faces detection",
      },
      {
        id: "feature2",
        IconProps: {
          icon: LivenessDetectionIcon,
          gradient: "primary",
        },
        title: "Liveness Detection",
        text: "Face Comparison, Face search and risky faces detection",
      },
      {
        id: "feature3",
        IconProps: {
          icon: DocumentAnalysisIcon,
          gradient: "quaternary",
        },
        title: "Document Analysis",
        text: "Extracting and analyzing data from documents",
      },
    ],
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: "https://mypags.app",
      title: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://mypags.app",
      title: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://mypags.app",
      title: "YouTube",
    },
  ],
  features: [
    {
      ImageProps: {
        src: firstFuture,
      },
      title: "Data labeling and annotations",
      text:
        "With 10 years of experience, our team have labeled data in all sorts of industry, including transportation, medical, agriculture, zoology, commerce, and real estate",
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Fully Human Labor",
          text:
            "While other platforms combines human intelligence at scale with AI and automation to annotate data,  we create a process that consists fully of strictly-trained human labour",
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Accuracy guaranteed",
          text:
            "We have a supervising team that reviews the work of our annotators at the end of the day to make sure that everything is correct",
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Flexibility",
          text:
            "We can label anytype of data, any categories, according to our client's requirements",
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
      },
      title: "Our working process",
      text: "To ensure everything is accurate, we follow this working pipeline",
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Define Specifications",
          text:
            "One of our experts will speak with you to define your project needs: target accuracy, format, and any special requirements.",
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Initial Job Test",
          text:
            "We execute a small production job based on your sample data. This tests the work we've done together to ensure you get exactly what you need",
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "Deploy Production Jobs",
          text:
            "With our high volume and low latency, we will turn your work around quickly, with delivery as soon as it's done",
        },
      ],
    },
    {
      title: "Our annotation services",
      text: "Improve your machine learning models with high-quality data",
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: "primary",
          },
          title: "Text Data",
          text: "Sophisticated annotations for text-based data",
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: "tertiary",
          },
          title: "Image Data",
          text: "Comprehensive annotations for images",
        },
        {
          IconProps: {
            icon: Medal,
            gradient: "secondary",
          },
          title: "Video data",
          text: "Scalable annotations for video data",
        },
        {
          IconProps: {
            icon: LightbulbAlt,
            gradient: "quaternary",
          },
          title: "Documents",
          text: "Secure processing of documents",
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: "More amazing features",
      text:
        "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      list: [
        {
          title: "Features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Another features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Another features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
      ],
    },
  ],
  screenshots: {
    title: "Our work",
    text: "Your data might look like these after we processed them",
    images: [
      {
        src: Blueprint,
        srcSet: `${Blueprint} 1x, ${Blueprint} 2x`,
        alt: "Phone 1",
      },
      {
        src: Body,
        srcSet: `${Body} 1x, ${Body} 2x`,
        alt: "Phone 2",
      },
      {
        src: Face,
        srcSet: `${Face} 1x, ${Face} 2x`,
        alt: "Phone 3",
      },
      {
        src: Lane,
        srcSet: `${Lane} 1x, ${Lane} 2x`,
        alt: "Phone 4",
      },
      {
        src: Lito,
        srcSet: `${Lito} 1x, ${Lito} 2x`,
        alt: "Phone 5",
      },
      {
        src: Rada,
        srcSet: `${Rada} 1x, ${Rada} 2x`,
        alt: "Phone 6",
      },
      {
        src: RealEstate,
        srcSet: `${RealEstate} 1x, ${RealEstate} 2x`,
        alt: "Phone 1",
      },
      {
        src: Scores,
        srcSet: `${Scores} 1x, ${Scores} 2x`,
        alt: "Phone 1",
      },
      {
        src: Screens,
        srcSet: `${Screens} 1x, ${Screens} 2x`,
        alt: "Phone 1",
      },
      {
        src: Seg51,
        srcSet: `${Seg51} 1x, ${Phone1x2} 2x`,
        alt: "Phone 1",
      },
      {
        src: Segm,
        srcSet: `${Segm} 1x, ${Segm} 2x`,
        alt: "Phone 1",
      },
      {
        src: Segmentation,
        srcSet: `${Segmentation} 1x, ${Segmentation} 2x`,
        alt: "Phone 1",
      },
      {
        src: Siro,
        srcSet: `${Siro} 1x, ${Siro} 2x`,
        alt: "Phone 1",
      },
      {
        src: Trafficlights,
        srcSet: `${Trafficlights} 1x, ${Trafficlights} 2x`,
        alt: "Phone 1",
      },
      {
        src: Vehicles,
        srcSet: `${Vehicles} 1x, ${Vehicles} 2x`,
        alt: "Phone 1",
      },
    ],
  },
  clients: {
    title: "What clients say about us?",
    comments: [
      {
        author: "Pat Cooper, Big Company SEO",
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: "Orsola Jeroch, Bigger Company CTO",
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  faq: {
    title: "Do you have any questions?",
    text:
      "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
    options: [
      {
        title: "Cras quis dolor auctor mi varius tincidunt?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Mauris accumsan dolor et elementum dapibus?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Pellentesque fringilla non dolor ut convallis?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Integer imperdiet venenatis orci, ac dictum libero semper sit amet?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "USD",
      types: {
        a: "Monthly",
        b: "Annually",
      },
      sections: [
        {
          title: "Beginner",
          price: {
            a: "$0",
            b: "$0",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: false,
            },
            {
              text: "Nullam vitae tortor",
              check: false,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose beginner",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Advanced",
          price: {
            a: "$12",
            b: "$120",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose advanced",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Expert",
          price: {
            a: "$24",
            b: "$240",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: true,
            },
            {
              text: "Fusce quis vestibulum",
              check: true,
            },
          ],
          button: {
            text: "Choose expert",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },
  contact: {
    title: "Contact us",
    text:
      "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
    sendButtonText: "Send message",
    form: {
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Must be an email").required("Required"),
        message: Yup.string()
          .min(20, "Must be at least 20 characters")
          .required("Required"),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values) =>
        window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: "firstName",
          placeholder: "First name",
          initialValue: "",
        },
        {
          name: "email",
          placeholder: "E-mail",
          type: "email",
          initialValue: "",
        },
        {
          name: "message",
          placeholder: "Message",
          multiline: true,
          initialValue: "",
        },
      ],
    },
  },
  newsletter: {
    title: "Stay always up to date",
    text:
      "Sign up to our monthly newsletter and get news and grest special offers!",
    buttonText: "Sign up",
    inputPlaceholder: "Your email address",
  },
  copyright: "© 2020 Coffeecream Themes",
};
