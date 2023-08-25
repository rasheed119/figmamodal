import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { searchOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonImg className="img-title" src="src/img/img1.png"></IonImg>
          <IonIcon slot="end" className="ion-margin" icon={searchOutline} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="ion-margin">
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src="src/img/img2.png" className="imgslide" />
                </IonCol>
                <IonCol size="8">
                  <IonText color="danger">
                    <h3>Hotspot</h3>
                  </IonText>
                  <IonText>
                    <h6 className="card-text">
                      Luxury Hotspots : 5 Most expensive high
                    </h6>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src="src/img/img3.png"></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                Surround Car
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/img4.png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonImg src="src/img/img7.png" className="downimg"></IonImg>
              <IonText>
                <sub>
                  Wow! Momo Foods enters Bhopal with Wow!
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  #Beverage
                  <IonText color="medium" className="marginleft">
                    #reel Stories
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <hr className="hr" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/img5.png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonImg src="src/img/img6.png" className="downimg"></IonImg>
              <IonText>
                <sub>
                  Wow! Momo Foods enters Bhopal with Wow!
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  #Beverage
                  <IonText color="medium" className="marginleft">
                    #reel Stories
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <hr className="hr" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/img9.png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonImg src="src/img/img8.png" className="downimg"></IonImg>
              <IonText>
                <sub>
                  Wow! Momo Foods enters Bhopal with Wow!
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  #Beverage
                  <IonText color="medium" className="marginleft">
                    #reel Stories
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <b>Latest News</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <img alt="Silhouette of mountains" src="src/img/img10.png" />
                <IonCardContent>
                  Unwrapping the Archies’ reinvention plan
                  <br />
                  <sub>#Lifestyle</sub>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <hr className="hr-long" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                Croma opens 58 outlets in 6, Croma retails more than 16,000
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText className="text">
                <sub color="medium">
                  These companies created a lot of hype when they listed on
                  the...
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <hr className="hr-long" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Select Citywalk opens 4 new stores in June</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText className="text">
                <sub color="medium">
                  These companies created a lot of hype when they listed on
                  the...
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <hr className="hr-long" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText>
                <sub>--Advertisment--</sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonImg src="src/img/img11.png"></IonImg>
            </IonCol>
          </IonRow>
          <div className="color ion-padding " id="fullwidth">
            <IonRow>
              <IonCol size="2">
                <IonImg
                  src="src/img/img12.png"
                  className="profile-img"
                ></IonImg>
              </IonCol>
              <IonCol size="10">
                <b>IR Prime</b>
                <br />
                <sub>Top stories of the day</sub>
              </IonCol>
            </IonRow>
            <hr className="hr-blue" />
            <IonRow>
              <IonCol size="4">
                <IonImg
                  className="imgdown ion-padding"
                  src="src/img/img13.png"
                ></IonImg>
              </IonCol>
              <IonCol className="ion-padding margin-top ">
                <IonText>
                  <sub>
                    Wow! Momo Foods enters Bhopal with Wow!
                    <br />
                  </sub>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonImg
                  className="imgdown ion-padding"
                  src="src/img/img14.png"
                ></IonImg>
              </IonCol>
              <IonCol className="ion-padding margin-top ">
                <IonText>
                  <sub>
                    Joom Marketplace offers a global window for sellers...
                    <br />
                  </sub>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonImg
                  className="imgdown ion-padding"
                  src="src/img/img15.png"
                ></IonImg>
              </IonCol>
              <IonCol className="ion-padding margin-top ">
                <IonText>
                  <sub>
                    FreshToHome fixing a broken meat market
                    <br />
                  </sub>
                </IonText>
              </IonCol>
            </IonRow>
          </div>
          <IonRow>
            <IonCol>
              <IonText>
                <b>Web Specials</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonImg src="src/img/img16.png"></IonImg>
            </IonCol>
          </IonRow>
          <IonList>
            <IonItem>
              <div className="rounded"></div>
              <IonLabel>Cinema industry welcomes lowering GST rates</IonLabel>
            </IonItem>
            <IonItem>
              <div className="rounded"></div>
              <IonLabel>
                Patanjali Ayurved to sell 7% stake in Patanjali
              </IonLabel>
            </IonItem>
            <IonItem>
              <div className="rounded"></div>
              <IonLabel>Select Citywalk opens 4 new stores in June</IonLabel>
            </IonItem>
            <IonItem>
              <div className="rounded"></div>
              <IonLabel>Select Citywalk opens 4 new stores in June</IonLabel>
            </IonItem>
            <IonItem>
              <div className="rounded"></div>
              <IonLabel>
                Joom Marketplace offers a global window for sellers
              </IonLabel>
            </IonItem>
          </IonList>
          <IonRow>
            <IonCol>
              <IonImg src="src/img/img17.png" className="margin-top" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
              <IonText>
                Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="margin-top">
            <IonCol>
              <IonText>
                <b>Web Specials</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="border">Rahul Gandhi In Manipur</IonCol>
            <IonCol className="border ion-text-center ">Meta</IonCol>
          </IonRow>
          <IonRow className="margin-top">
            <IonCol>
              <IonText>
                <b>Leaders Link</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonCard>
            <img
              alt="Silhouette of mountains"
              className="leaders-img"
              src="src/img/img18.png"
            />
            <IonCardHeader>
              <IonRow>
                <IonCol size="2">
                  <img src="src/img/img19.png" alt="" />
                </IonCol>
                <IonCol size="10">
                  <IonText>
                    Top 5 iconic Apple stores across the world by design
                  </IonText>
                </IonCol>
              </IonRow>
            </IonCardHeader>
            <IonCardContent>
              From a total of around 522 Apple stores across the world..
              <br />
              <sub>Arundhathi Roy</sub>
            </IonCardContent>
          </IonCard>
          <IonRow className="margin-top">
            <IonCol>
              <IonText>
                <b>Research</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonCard className="ion-margin">
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonImg src="src/img/img20.png" className="imgslide" />
                  </IonCol>
                  <IonCol size="8">
                    <IonText>
                      <h6 className="card-text">
                        Luxury Hotspots : 5 Most expensive high
                      </h6>
                    </IonText>
                    <IonLabel>
                      <IonText color="danger">
                        <h3>Fashon</h3>
                      </IonText>
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <div className="color-black ion-padding ">
            <b>IR Video Wall</b>
            <IonRow>
              <IonCol>
                <IonImg src="src/img/img21.png" className="margin-top"></IonImg>
                <IonImg
                  src="src/img/youtube 1.png"
                  className="youtube"
                ></IonImg>
                <sub className="youtube-text">5min</sub>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText>
                  Senco Gold IPO subscribed 69% on first day of subscription
                </IonText>
              </IonCol>
            </IonRow>
          </div>
          <IonRow>
            <IonCol className="ion-text-center margin-top ">
              <IonText>
                <sub>--Advertisment--</sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonImg src="src/img/Mask group.png"></IonImg>
            </IonCol>
          </IonRow>
          <IonRow className="margin-top">
            <IonCol>
              <IonText>
                <b>Fashion & LifeStyle</b>
                <div className="headerline ion-margin"></div>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/div.mpp-main-element-news-sub-card-img (1).png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonText className="redcolor" >
                Fashion <br/>
              </IonText>
              <IonText>
                <sub>
                What makes Fila unique is its attitude and...
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  <IonText color="medium" className="marginleft">
                  The singer-songwriter has been spotted in the hybrid garment...
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/div.mpp-main-element-news-sub-card-img (2).png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonText className="redcolor" >
                Shailesh <br/>
              </IonText>
              <IonText>
                <sub>
                What makes Fila unique is its attitude and...
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  <IonText color="medium" className="marginleft">
                  Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>          <IonRow>
            <IonCol size="4">
              <IonImg
                className="imgdown ion-padding"
                src="src/img/div.mpp-main-element-news-sub-card-img.png"
              ></IonImg>
            </IonCol>
            <IonCol className="ion-padding">
              <IonText className="redcolor" >
                LifeStyle <br/>
              </IonText>
              <IonText>
                <sub>
                What makes Fila unique is its attitude and...
                  <br />
                </sub>
              </IonText>
              <IonText>
                <sub>
                  <IonText color="medium" className="marginleft">
                  BTS attended the 2022 Grammy Awards in complementary ...
                  </IonText>
                </sub>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
