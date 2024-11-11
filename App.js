import React from "react";
import ReactDOM from "react-dom/client";
import { FaStar } from "react-icons/fa6";
import { PiBagSimpleBold } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { LuBadgeHelp } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import "./app.css";

const Header = () => {
  function clickBar() {}
  return (
    <div className="res-container">
      <div className="header">
        <div id="logo">
          <img
            className="logo-img"
            src="https://cdn-images-1.medium.com/max/1200/1*sQa3vSQd9V4k-PeVNgGg0Q.png"
          />
          <FaBars id="bar" className="three-bar" onClick={clickBar} />
        </div>
        <div className="nav-items">
          <ul>
            <li className="items">
              <PiBagSimpleBold className="icon" /> Swiggy Corporate
            </li>
            <li className="items">
              <BiSolidOffer className="icon" /> Offers
            </li>
            <li className="items">
              <LuBadgeHelp className="icon" />
              Help
            </li>
            <li className="items">
              <FaRegUser className="icon" /> Sign in
            </li>
            <li className="items">
              <FaBitbucket className="icon" />
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <div className="res-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            resData.card.card.info.cloudinaryImageId
          }
        />
      </div>
      <h3 className="offer-text">
        {resData.card.card.info.areaName}
        {resData.card.card.info.areaNamer}
      </h3>
      <div className="res-name">
        <h4>{resData.card.card.info.name}</h4>
      </div>
      <div className="rating">
        <h4 className="rating-heading">
          <FaStar className="rating-icons" />
          {resData.card.card.info.sla.avgRating} .{" "}
          {resData.card.card.info.sla.slaString}
        </h4>
      </div>
      <div className="cuisine">
        <h4>{resData.card.card.info.cuisines.join(", ")} </h4>
      </div>
      <div className="location">
        <h4>{resData.card.card.info.locality}</h4>
      </div>
    </div>
  );
};

const resObj = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "520358",
          name: "Junction of food",
          cloudinaryImageId: "gzl6unyjvux7ifds8bnu",
          locality: "Mandawali",
          areaName: "Mayur Vihar",
          costForTwo: "₹450 for two",
          cuisines: [
            "Biryani",
            "Snacks",
            "Fast Food",
            "Ice Cream",
            "Beverages",
          ],
          avgRating: 3.5,
          parentId: "310682",
          avgRatingString: "3.5",
          totalRatingsString: "27",
          promoted: true,
          adTrackingId:
            "cid=21173797~p=1~adgrpid=21173797#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=520358~eid=4cf68d40-ca4b-4ea4-b7c2-7614f3596927~srvts=1731298759875~collid=83673",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-12 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "21173797",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=520358&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "321053",
          name: "Barista Coffee",
          cloudinaryImageId: "b64bf721e12e7b3df82c832898999c51",
          locality: "Max Hospital",
          areaName: "Vaishali",
          costForTwo: "₹350 for two",
          cuisines: ["Beverages", "Snacks", "Desserts"],
          avgRating: 4.8,
          parentId: "416281",
          avgRatingString: "4.8",
          totalRatingsString: "69",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 3.6,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=321053&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "485500",
          name: "Mekmeal",
          cloudinaryImageId: "g9plbdenfrl7yjosrlnl",
          locality: "D Block",
          areaName: "Sector 18",
          costForTwo: "₹99 for two",
          cuisines: [
            "Snacks",
            "Indian",
            "Fast Food",
            "Beverages",
            "Juices",
            "Desserts",
            "Bakery",
          ],
          avgRating: 3.1,
          parentId: "291363",
          avgRatingString: "3.1",
          totalRatingsString: "434",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 21:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=485500&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "521361",
          name: "Chai Sutta Bar",
          cloudinaryImageId: "ffuuinsedfcetumwkom2",
          locality: "G Block",
          areaName: "Sector 3",
          costForTwo: "₹200 for two",
          cuisines: ["Beverages", "Italian", "Fast Food"],
          avgRating: 3.4,
          veg: true,
          parentId: "14909",
          avgRatingString: "3.4",
          totalRatingsString: "74",
          sla: {
            deliveryTime: 59,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=521361&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "346634",
          name: "Old Cafe 18",
          cloudinaryImageId: "rtyqvhv172es3kpgttsb",
          locality: "Savitri Market Road",
          areaName: "Sector 18",
          costForTwo: "₹99 for two",
          cuisines: ["Pizzas", "Snacks", "Beverages"],
          avgRating: 3.9,
          parentId: "151272",
          avgRatingString: "3.9",
          totalRatingsString: "2.7K+",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-12 05:29:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=346634&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "843179",
          name: "Mama Ji Kulhad Chai",
          cloudinaryImageId: "4312e924a8e3cd240423e4515300cdf0",
          locality: "Nyay Khand 2 ",
          areaName: "Indirapuram",
          costForTwo: "₹150 for two",
          cuisines: [
            "Indian",
            "Street Food",
            "Snacks",
            "Home Food",
            "Fast Food",
            "Cafe",
          ],
          avgRating: 4.7,
          veg: true,
          parentId: "499316",
          avgRatingString: "4.7",
          totalRatingsString: "32",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=843179&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "16122",
          name: "Keventers - Milkshakes & Desserts",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2bd12ac2-9da7-44a3-83fa-cbe66dd77777_16122.JPG",
          locality: "Logix City Centre",
          areaName: "Sector 32",
          costForTwo: "₹200 for two",
          cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
          avgRating: 4.2,
          veg: true,
          parentId: "268997",
          avgRatingString: "4.2",
          totalRatingsString: "3.3K+",
          sla: {
            deliveryTime: 58,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=16122&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30317",
          name: "Fruit Crux",
          cloudinaryImageId: "p214iavzvpih8veqileu",
          locality: "Vaishali",
          areaName: "Vaishali",
          costForTwo: "₹200 for two",
          cuisines: [
            "Healthy Food",
            "sandwich",
            "Salads",
            "Continental",
            "Beverages",
          ],
          avgRating: 4.5,
          parentId: "16096",
          avgRatingString: "4.5",
          totalRatingsString: "14K+",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-12 01:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "brand",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "430",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=30317&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "89138",
          name: "Cafe 16",
          cloudinaryImageId: "f9d00ae4c28c0af97e01d33f7f9dbcd6",
          locality: "Captain Vijyant Thapar Marg",
          areaName: "Sector 3",
          costForTwo: "₹159 for two",
          cuisines: [
            "Chinese",
            "North Indian",
            "Italian",
            "Street Food",
            "Beverages",
          ],
          avgRating: 4,
          veg: true,
          parentId: "52131",
          avgRatingString: "4.0",
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-12 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=89138&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65515",
          name: "Cafe Coffee Day",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/c33e7bd8-c3b3-4e36-8eb1-9d9aff25f717_65515.jpg",
          locality: "1St Phase",
          areaName: "Mayur Vihar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Burgers",
            "Ice Cream",
            "Bakery",
            "Fast Food",
          ],
          avgRating: 4.4,
          parentId: "1",
          avgRatingString: "4.4",
          totalRatingsString: "986",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-11-11 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹90",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65515&source=collection&query=Shake",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="restaurant-container">
        {resObj.map((res) => (
          <RestaurantCard key={res.card.card.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
