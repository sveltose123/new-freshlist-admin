import React from "react";
import {
  FaRegFileAlt,
  FaStream, FaStar, FaGopuram, FaPodcast,
  FaFileSignature, FaBell, FaShoppingBag,
  FaWallet, FaHome, FaUserEdit, FaAdversal, FaStore, FaUsers, FaCircle,
  FaCog, FaQuestionCircle, FaSlidersH, FaUser, FaShoppingCart, FaGift,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { AiFillBell } from "react-icons/ai"
import { FiBarChart2 } from "react-icons/fi"

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "ORDER MANAGEMENT",
  },
  {
    id: "order",
    title: "Orders",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "all",
        title: `All (${8})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/all",
      },
      {
        id: "pending",
        title: `Pending   (${4})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/pending",
      },
      {
        id: "confirmed",
        title: `Confirmed    (${7})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/confirmed",
      },
      {
        id: "packaging",
        title: `Packaging    (${3})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/packaging",
      },
      {
        id: "outfordelivery",
        title: `Out for delivery  (${1})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/outfordelivery",
      },
      {
        id: "delivery",
        title: `Delivered  (${8})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/delivered",
      },
      {
        id: "return",
        title: `Returned  (${6})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/returned",
      },
      {
        id: "failedtodeliver",
        title: `Failed to Deliver  (${8})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/failedtodeliver",
      },
      {
        id: "canceled",
        title: `Canceled  (${3})`,
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/canceled",
      },

    ]
  },
  {
    id: "refund",
    title: "Refund Requests",
    type: "collapse",
    icon: <FaRegFileAlt size={15} />,
    children: [
      {
        id: "pending",
        title: "Pending",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/pendingRequest",
      },
      {
        id: "approv",
        title: "Approved",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/approvedRequest",
      },
      {
        id: "refund",
        title: "Refunded",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/refundRequest",
      },
      {
        id: "reject",
        title: "Rejected",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/rejectedRequest",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "Category MANAGEMENT",
  },
  {
    id: "category",
    title: "Category Setup",
    type: "collapse",
    icon: <FaStream size={15} />,
    children: [
      {
        id: "category",
        title: "Category",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/category/categoryList",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "PRODUCT MANAGEMENT",
  },

  {
    id: "brand",
    title: "Brands",
    type: "collapse",
    icon: <FaStar size={15} />,
    children: [
      {
        id: "addnew",
        title: "Add New",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/brand/AddBrand",
      },
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/brand/BrandList",
      },
    ]
  },
  {
    id: "product",
    title: "Product Attribute",
    type: "item",
    icon: <FaGopuram size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/attribute/ProductAttributeList",
  },
  {
    id: "unit",
    title: "Unit",
    type: "item",
    icon: <FaGopuram size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/unit/UnitList",
  },

  {
    id: "inhouseproduct",
    title: "InHouse Product  ",
    type: "collapse",
    icon: <FaStore size={15} />,
    children: [
      {
        id: "product",
        title: "Products",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/HouseProductList",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "USER MANAGEMENT",
  },
  {
    id: "customer",
    title: "Customers  ",
    type: "collapse",
    icon: <FaWallet size={15} />,
    children: [
      {
        id: "history",
        title: "Order History",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/orderHistory",
      },
      {
        id: "list",
        title: "Customer List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/customerList",
      },

      {
        id: "earn",
        title: "Referrals & Earn",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/referralsEarn",
      },

      {
        id: "reward",
        title: "Reward Points",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/rewardPoints",
      },
      {
        id: "reviews",
        title: "Customer Reviews",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/customerReview",
      },
      {
        id: "wallet",
        title: "Wallet Activities",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/wallet",
      },
      {
        id: "activity",
        title: "Activities",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/activity",
      },
      {
        id: "purchase",
        title: "Purchase History",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/purchase",
      },
    ]
  },
  {
    id: "vendor",
    title: "Vendors",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "vendor",
        title: "Add New Vendors  ",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/addVendor",
      },
      {
        id: "vendor",
        title: "Vendors List ",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/vendorList",
      },
      {
        id: "vendor",
        title: "Zone",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/zones",
      },
      {
        id: "withdraw",
        title: "Withdraws",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/withDraws",
      },
    ]
  },
  {
    id: "subscriber",
    title: "Subscribers  ",
    type: "item",
    icon: <FaUser size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subscriber/subscriberList",
  },
  {
    id: "delivery",
    title: "Delivery-man  ",
    type: "collapse",
    icon: <FaUser size={15} />,
    children: [
      {
        id: "addnew",
        title: "Add New",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/delivery/AddDeliveryMan",
      },
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/delivery/DeliveryManList",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "STOCK MANAGEMENT",
  },
  {
    id: "batch",
    title: "Batch",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/batch/batchList",
  },
  {
    type: "groupHeader",
    groupTitle: "HUB MANAGEMENT",
  },
  {
    id: "hub",
    title: "HUB",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "hub",
        title: "HUB",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hub/hubList",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "ZONE MANAGEMENT",
  },
  {
    id: "zone",
    title: "Zone",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "zone based delivery charges",
        title: "Zone Based Delivery Charges",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/zone/deliverycharges",
      },
      {
        id: "zone based minimum order value",
        title: "Zone Based Minimum Order Value",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/zone/minimunOrderValue",
      },

      {
        id: "zone based products",
        title: "Zone Based Products",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/zone/zoneBasedProducts",
      },
      {
        id: "zone based delivery slots",
        title: "Zone Based Delivery Slots Deal",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/zone/deliverySlots",
      },
      {
        id: "bULK export and import",
        title: "BULK Export and Import",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/zone/importExport",
      },
    ]
  },

  // {
  //   id: "delivery",
  //   title: "Delivery Zone  ",
  //   type: "item",
  //   icon: <TbTruckDelivery size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/maps/maps",
  // },
  {
    type: "groupHeader",
    groupTitle: "PROMOTION MANAGEMENT",
  },
  {
    id: "Banner",
    title: "Banner",
    type: "item",
    icon: <BsImage size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    id: "offer&deal",
    title: "Offers & Deals",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "coupon",
        title: "Coupon",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/coupon/couponList",
      },
      {
        id: "flashdeal",
        title: "Flash Deals",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/flashSale/flashSale",
      },
      {
        id: "dealofday",
        title: "Deal of the Day",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/dealOfDay/dealOfDay",
      },
      {
        id: "featuredeal",
        title: " Featured Deal",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/featuredeal/featuredeal",
      },
    ]
  },
  {
    id: "notification",
    title: "Notification",
    type: "item",
    icon: <AiFillBell size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/notif/notification",
  },
  {
    type: "groupHeader",
    groupTitle: "REPORT MANAGEMENT",
  },

  {
    id: "report",
    title: "Stock Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/stockReport",
  },
  {
    id: "commissionreport",
    title: "Commission Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/commissionReport",

  },
  {
    id: "producteport",
    title: "Product Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/productReport",
  },
  {
    id: "customerreport",
    title: "Customer Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/customerReport",
  },
  {
    id: "salereport",
    title: "Sales Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/saleReport",
  },
  {
    id: "taxreport",
    title: "Tax Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/taxReport",
  },
  // {
  //   id: "newproductreport",
  //   title: "New Product Report  ",
  //   type: "item",
  //   icon: <FiBarChart2 size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/returnedOrder",
  // },
  {
    type: "groupHeader",
    groupTitle: "MEDIA MANAGEMENT",
  },
  {
    id: "gallery",
    title: "Gallery",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/gallery/gallery",
  },
  {
    id: "media",
    title: "Media",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/gallery/Media",
  },
  {
    type: "groupHeader",
    groupTitle: "PAYOUT MANAGEMENT",
  },
  {
    id: "payout",
    title: "Payout",
    type: "collapse",
    icon: <TbTruckDelivery size={15} />,
    children: [
      {
        id: "vendor",
        title: "Vendor Payout",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/payout/vendorPayout",
      },
      {
        id: "driver",
        title: "Driver Payout",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/payout/driverPayout",
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "INCOME MANAGEMENT",
  },
  {
    id: "earning",
    title: "Earning",
    type: "collapse",
    icon: <TbTruckDelivery size={15} />,
    children: [
      {
        id: "vendorearning",
        title: "Vendor Earning ",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/earning/vendorEarning",
      },
      {
        id: "driverearning",
        title: "Driver Earning",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/earning/driverEarning",
      },
      {
        id: "adminearning",
        title: "Admin Earning",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/earning/adminEarning",
      }
    ]
  },
  {
    id: "term & condition",
    title: "Term & Condition",
    type: "item",
    icon: <FaFileSignature size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/termsAndCondition/TAndCList",
  },
  {
    id: "privacypolicy",
    title: "PrivacyPolicy",
    type: "item",
    icon: <FaCog size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/privacyPolicy/privacyPolicy",
  },
  {

    id: "helpAndSupport",
    title: "Help And Support",
    type: "item",
    icon: <FaQuestionCircle size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/helpAndSupport/helpAndSupport",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={15} />,
    permissions: ["admin", "editor"],

  },

  // {
  //   id: "subscription",
  //   title: "Subscriptions",
  //   type: "item",
  //   // icon: <Icon.Youtube size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/marketing/subscription/subscriptionList",
  // },
  // {
  //   id: "invoiceSetting",
  //   title: "Invoice Setting ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceSetting",
  // },
  // {
  //   id: "invoiceDesign",
  //   title: "Invoice Design ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceDesign",
  // },
  // {
  //   id: "bank",
  //   title: "Bank",
  //   type: "collapse",
  //    icon: < FaHouseDamage size={20} />,
  //    children: [
  //     {
  //       id: "bank",
  //       title: "bank Details",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/bank/bank",
  //     },
  //   ]
  // },
  //     {
  //       id: "pushnotification",
  //       title: "Push Notification",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/marketing/pushnotification/addPushnotification",
  //     },

  //      {
  //        id: "variantList",
  //        title: "Variant",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/variant/variantList",
  //      },
  //      {
  //        id: "unitsList",
  //        title: "Units",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/units/unitsList",
  //     },

];
export default navigationConfig;



