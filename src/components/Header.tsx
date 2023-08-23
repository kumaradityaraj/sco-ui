import "@patternfly/patternfly/patternfly.css";
import { Title } from "@patternfly/react-core";

const Header = () => {
  return (
    // <div classNameName="pf-v5-c-page" id="dashboard-demo">
    //   <div classNameName="pf-v5-c-skip-to-content">
    //     <a
    //       classNameName="pf-v5-c-button pf-m-primary"
    //       href="#main-content-dashboard-demo"
    //     >
    //       Skip to content
    //     </a>
    //   </div>
    //   <header classNameName="pf-v5-c-masthead" id="dashboard-demo-masthead">
    //     <span classNameName="pf-v5-c-masthead__toggle">
    //       <button
    //         classNameName="pf-v5-c-button pf-m-plain"
    //         type="button"
    //         aria-label="Global navigation"
    //       >
    //         <i classNameName="fas fa-bars" aria-hidden="true"></i>
    //       </button>
    //     </span>
    //     <div classNameName="pf-v5-c-masthead__main">
    //       <a
    //         classNameName="pf-v5-c-masthead__brand"
    //         href="#"
    //       >
    //         <span classNameName="--pf-v5-global--FontSize--4xl">Smart Connectors</span>
    //       </a>
    //     </div>
    //     <div classNameName="pf-v5-c-masthead__content">
    //       <div
    //         classNameName="pf-v5-c-toolbar pf-m-full-height pf-m-static"
    //         id="dashboard-demo-masthead-toolbar"
    //       >
    //         <div classNameName="pf-v5-c-toolbar__content">
    //           <div classNameName="pf-v5-c-toolbar__content-section">
    //             <div classNameName="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md">
    //               <div classNameName="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg">
    //                 <div classNameName="pf-v5-c-toolbar__item">
    //                   <button
    //                     classNameName="pf-v5-c-menu-toggle pf-m-plain"
    //                     type="button"
    //                     aria-expanded="false"
    //                     aria-label="Application launcher"
    //                   >
    //                     <i classNameName="fas fa-th" aria-hidden="true"></i>
    //                   </button>
    //                 </div>
    //                 <div classNameName="pf-v5-c-toolbar__item">
    //                   <button
    //                     classNameName="pf-v5-c-menu-toggle pf-m-plain"
    //                     type="button"
    //                     aria-expanded="false"
    //                     aria-label="Settings"
    //                   >
    //                     <i classNameName="fas fa-cog" aria-hidden="true"></i>
    //                   </button>
    //                 </div>
    //                 <div classNameName="pf-v5-c-toolbar__item">
    //                   <button
    //                     classNameName="pf-v5-c-menu-toggle pf-m-plain"
    //                     type="button"
    //                     aria-expanded="false"
    //                     aria-label="Help"
    //                   >
    //                     <i
    //                       classNameName="fas fa-question-circle"
    //                       aria-hidden="true"
    //                     ></i>
    //                   </button>
    //                 </div>
    //               </div>
    //               <div classNameName="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
    //                 <button
    //                   classNameName="pf-v5-c-menu-toggle pf-m-plain"
    //                   type="button"
    //                   aria-expanded="false"
    //                   aria-label="Actions"
    //                 >
    //                   <i classNameName="fas fa-ellipsis-v" aria-hidden="true"></i>
    //                 </button>
    //               </div>
    //             </div>
    //             <div classNameName="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
    //               <button
    //                 classNameName="pf-v5-c-menu-toggle pf-m-full-height"
    //                 type="button"
    //                 aria-expanded="false"
    //               >
    //                 <span classNameName="pf-v5-c-menu-toggle__icon">
    //                   <img
    //                     classNameName="pf-v5-c-avatar"
    //                     alt="Avatar image"
    //                     src="https://www.patternfly.org/assets/images/img_avatar-light.svg"
    //                   />
    //                 </span>
    //                 <span classNameName="pf-v5-c-menu-toggle__text">
    //                   Ned Username
    //                 </span>
    //                 <span classNameName="pf-v5-c-menu-toggle__controls">
    //                   <span classNameName="pf-v5-c-menu-toggle__toggle-icon">
    //                     <i classNameName="fas fa-caret-down" aria-hidden="true"></i>
    //                   </span>
    //                 </span>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div classNameName="pf-v5-c-page__sidebar">
    //     <div classNameName="pf-v5-c-page__sidebar-body">
    //       <nav
    //         classNameName="pf-v5-c-nav"
    //         id="dashboard-demo-primary-nav"
    //         aria-label="Global"
    //       >
    //         <ul classNameName="pf-v5-c-nav__list" role="list">
    //           <li classNameName="pf-v5-c-nav__item">
    //             <a href="#" classNameName="pf-v5-c-nav__link">
    //               System panel
    //             </a>
    //           </li>
    //           <li classNameName="pf-v5-c-nav__item">
    //             <a
    //               href="#"
    //               classNameName="pf-v5-c-nav__link pf-m-current"
    //               aria-current="page"
    //             >
    //               Policy
    //             </a>
    //           </li>
    //           <li classNameName="pf-v5-c-nav__item">
    //             <a href="#" classNameName="pf-v5-c-nav__link">
    //               Authentication
    //             </a>
    //           </li>
    //           <li classNameName="pf-v5-c-nav__item">
    //             <a href="#" classNameName="pf-v5-c-nav__link">
    //               Network services
    //             </a>
    //           </li>
    //           <li classNameName="pf-v5-c-nav__item">
    //             <a href="#" classNameName="pf-v5-c-nav__link">
    //               Server
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
    // <Title headingLevel="h1">h1 defaults to 2xl</Title>

    <div className="pf-v5-c-page" id="dashboard-demo">
      <div className="pf-v5-c-skip-to-content">
        <a
          className="pf-v5-c-button pf-m-primary"
          href="#main-content-dashboard-demo"
        >
          Skip to content
        </a>
      </div>
      <header className="pf-v5-c-masthead" id="dashboard-demo-masthead">
        <span className="pf-v5-c-masthead__toggle">
          <button
            className="pf-v5-c-button pf-m-plain"
            type="button"
            aria-label="Global navigation"
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </button>
        </span>
        <div className="pf-v5-c-masthead__main">
          <a className="pf-v5-c-masthead__brand" href="#">
            <Title headingLevel="h1">Smart Connectors</Title>
          </a>
        </div>
        <div className="pf-v5-c-masthead__content">
          <div
            className="pf-v5-c-toolbar pf-m-full-height pf-m-static"
            id="dashboard-demo-masthead-toolbar"
          >
            <div className="pf-v5-c-toolbar__content">
              <div className="pf-v5-c-toolbar__content-section">
                <div className="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md">
                  <div className="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg">
                    <div className="pf-v5-c-toolbar__item">
                      <button
                        className="pf-v5-c-menu-toggle pf-m-plain"
                        type="button"
                        aria-expanded="false"
                        aria-label="Application launcher"
                      >
                        <i className="fas fa-th" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="pf-v5-c-toolbar__item">
                      <button
                        className="pf-v5-c-menu-toggle pf-m-plain"
                        type="button"
                        aria-expanded="false"
                        aria-label="Settings"
                      >
                        <i className="fas fa-cog" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="pf-v5-c-toolbar__item">
                      <button
                        className="pf-v5-c-menu-toggle pf-m-plain"
                        type="button"
                        aria-expanded="false"
                        aria-label="Help"
                      >
                        <i
                          className="fas fa-question-circle"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                    <button
                      className="pf-v5-c-menu-toggle pf-m-plain"
                      type="button"
                      aria-expanded="false"
                      aria-label="Actions"
                    >
                      <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
                  <button
                    className="pf-v5-c-menu-toggle pf-m-full-height"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="pf-v5-c-menu-toggle__icon">
                      <img
                        className="pf-v5-c-avatar"
                        alt="Avatar image"
                        src="/assets/images/img_avatar-light.svg"
                      />
                    </span>
                    <span className="pf-v5-c-menu-toggle__text">
                      Ned Username
                    </span>
                    <span className="pf-v5-c-menu-toggle__controls">
                      <span className="pf-v5-c-menu-toggle__toggle-icon">
                        <i className="fas fa-caret-down" aria-hidden="true"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="pf-v5-c-page__sidebar">
        <div className="pf-v5-c-page__sidebar-body">
          <nav
            className="pf-v5-c-nav"
            id="dashboard-demo-primary-nav"
            aria-label="Global"
          >
            <ul className="pf-v5-c-nav__list" role="list">
              <li className="pf-v5-c-nav__item">
                <a href="#" className="pf-v5-c-nav__link">
                  System panel
                </a>
              </li>
              <li className="pf-v5-c-nav__item">
                <a
                  href="#"
                  className="pf-v5-c-nav__link pf-m-current"
                  aria-current="page"
                >
                  Policy
                </a>
              </li>
              <li className="pf-v5-c-nav__item">
                <a href="#" className="pf-v5-c-nav__link">
                  Authentication
                </a>
              </li>
              <li className="pf-v5-c-nav__item">
                <a href="#" className="pf-v5-c-nav__link">
                  Network services
                </a>
              </li>
              <li className="pf-v5-c-nav__item">
                <a href="#" className="pf-v5-c-nav__link">
                  Server
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
