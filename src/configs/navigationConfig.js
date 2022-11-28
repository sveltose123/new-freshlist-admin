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
        title: "All",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/all",
      },
      {
        id: "pending",
        title: "Pending",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/pending",
      },
      {
        id: "confirmed",
        title: "Confirmed",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/confirmed",
      },
      {
        id: "packaging",
        title: "Packaging",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/packaging",
      },
      {
        id: "outfordelivery",
        title: "Out for delivery",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/outfordelivery",
      },
      {
        id: "delivery",
        title: "Delivered",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/delivered",
      },
      {
        id: "return",
        title: "Returned",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/returned",
      },
      {
        id: "failedtodeliver",
        title: "Failed to Deliver",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/failedtodeliver",
      },
      {
        id: "canceled",
        title: "Canceled",
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
    groupTitle: "USER MANAGEMENT",
  },
  {
    id: "customer",
    title: "Customers  ",
    type: "collapse",
    icon: <FaWallet size={15} />,
    children: [
      {
        id: "list",
        title: "Customer List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/customerList",
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
        title: "Wallet",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/wallet",

      }
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
    id: "subcriber",
    title: "Subscribers  ",
    type: "item",
    icon: <FaUser size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/order/allOrder",
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
    navLink: "/app/order/allOrder",
  },
  {
    type: "groupHeader",
    groupTitle: "PRODUCT MANAGEMENT",
  },
  {
    id: "category",
    title: "Category Setup",
    type: "collapse",
    icon: <FaStream size={15} />,
    children: [
      {
        title: "category",
        type: "Category",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/wallet/walletList",
      },
      {
        title: "subcategory",
        type: "SubCategory",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/wallet/walletList",
      },
    ]
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
        navLink: "/app/order/allOrder",
      },
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/allOrder",
      },
    ]
  },
  {
    id: "product",
    title: "Product Attribute",
    type: "item",
    icon: <FaGopuram size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/wallet/walletList",
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
        navLink: "/app/order/allOrder",
      },
      {
        id: "bulkimport",
        title: "Bulk import",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/allOrder",
      },
    ]
  },
  {
    id: "sellerproduct",
    title: "Seller Product",
    type: "collapse",
    icon: <FaPodcast size={15} />,
    children: [

      {
        id: "newproduct",
        title: " New Products",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/allOrder",
      },
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "ZONE MANAGEMENT",
  },

  {
    id: "delivery",
    title: "Delivery Zone  ",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/order/returnedOrder",
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
    id: "page",
    title: "Page",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/order/returnedOrder",
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
        navLink: "/app/order/returnedOrder",
      },
      {
        id: "driver",
        title: "Driver Payout",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/returnedOrder",
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
        navLink: "/app/order/returnedOrder",
      },
      {
        id: "driverearning",
        title: "Driver Earning",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/returnedOrder",
      },
      {
        id: "adminearning",
        title: "Admin Earning",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/returnedOrder",
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
    navLink: "/app/freshlist/privacypolicy/privacyPolicy",
  },
  {
    id: "helpAndSupport",
    title: "Help And Support",
    type: "collapse",
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
  //   id: "subsDetails",
  //   title: " Subscription Details ",
  //   type: "item",
  //   icon: < MdOutlineSubscriptions size={20}/>,
  //   navLink: "/app/subsDetails/subsDetails",
  // },


  // {
  //   id: "churnRate",
  //   title: "Churn Rate",
  //   type: "item",
  //   icon: < FaAlipay size={20}/>,
  //   navLink: "/app/churnRate/churnRate",
  // },
  // {
  //   id: "siteSetting",
  //   title: "Site Setting",
  //   type: "collapse",
  //   icon: <Icon.Grid size={20} />,
  //   children: [
  //     {
  //       id: "general",
  //       title: "General",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/siteSetting/General",
  //     },
  //     {
  //       id: "emailSetting",
  //       title: "Mail Setting",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/siteSetting/emailSetting",
  //     },
  //     {
  //       id: "smsSetting",
  //       title: "SMS Setting",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/siteSetting/smsSetting",
  //     },
  //   ]
  // },
  // {
  //   id: "subscription",
  //   title: "Subscriptions",
  //   type: "item",
  //   // icon: <Icon.Youtube size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/marketing/subscription/subscriptionList",
  // },

  // {
  //   id: "roleList",
  //   title: "Roles and Permission",
  //   type: "item",
  //   icon: <Icon.GitMerge size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/roleAndPermission/roleList",
  // },
  // {
  //   id: "mailReport",
  //   title: "Mail Report",
  //   type: "item",
  //   icon: < FaEnvelope size={20}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/emailReport/mailReport",
  // },
  // {
  //   id: "smsReport",
  //   title: " SMS Report",
  //   type: "item",
  //   icon: < FaSms size={20}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/sms/smsReport",
  // },
  ,
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
  // {
  //   id: "marketing",
  //   title: "Marketing Tools",
  //   type: "collapse",
  //   icon: <FaShoppingBag size={20}/>,
  //   children: [
  //     {
  //       id: "advertiesement",
  //       title: "advertiesement",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/marketing/advertiesement/advertiesementList",
  //     },
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



