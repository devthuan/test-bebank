export const IconButton = ({
  width = "24",
  height = "24",
  className,
  color = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={`icon ${className}`}
    >
      <path
        d="M5 5l10 10M15 5v10h-10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AnimationEyes = () => {
  return (
    <svg
      width="311.3"
      height="233.3"
      className="loader__eyes js-eyes"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 311.3 233.3"
      style={{ transform: "translate(0px, 0px)", display: "block" }}
    >
      <style type="text/css">
        {`
                    .st0 {
                        fill: #FFFFFF;
                        stroke: #000000;
                        stroke-width: 3;
                        stroke-miterlimit: 9.9999;
                    }
                    .st1 {
                        fill: #FFFFFF;
                    }
                    .st2 {
                        stroke: #000000;
                        stroke-width: 3;
                        stroke-miterlimit: 9.9999;
                    }
                    .st3 {
                        fill: #F8D8D8;
                        stroke: #000000;
                        stroke-width: 3;
                        stroke-miterlimit: 9.9999;
                    }
                    .st4 {
                        fill: #FF4E1B;
                    }
                `}
      </style>
      <defs>
        <clipPath id="mask-left">
          <path
            className="st1"
            d="M139.5,101.5c2.5-7.8,6-14.8,10.3-21c0-0.1-0.1-0.2-0.1-0.3c-3.8-11.2-11.1-19-20.6-22c-2.8-0.9-5.6-1.3-8.5-1.3c-7,0-14.2,2.5-21,7.5C89.8,71.3,82.2,82.4,78,95.5c-4.1,13.1-4.3,26.5-0.4,37.9c3.8,11.2,11.1,19,20.6,22c9.4,3,19.9,0.8,29.5-6.1c3.5-2.5,6.7-5.6,9.6-9.1C134.6,128,135.3,114.6,139.5,101.5z"
          />
        </clipPath>
        <clipPath id="mask-right">
          <path
            className="st1"
            d="M206,58.9c-3.8-1.2-7.6-1.8-11.4-1.8c-21.7,0-43.6,18.2-52.2,45.3c-4.9,15.5-4.8,31.6,0.3,45.3c5.1,13.6,14.5,23.1,26.6,27c12,3.8,25.3,1.4,37.2-6.7c12.1-8.2,21.5-21.3,26.4-36.8C243,99.2,230.9,66.8,206,58.9z"
          />
        </clipPath>
      </defs>
      <g className="left-container">
        <ellipse
          transform="matrix(0.3023 -0.9532 0.9532 0.3023 -22.508 182.8248)"
          className="st0"
          cx="113.6"
          cy="106.8"
          rx="52.5"
          ry="38.8"
        />
      </g>
      <g clipPath="url(#mask-left)">
        <g
          className="js-eyes-left"
          style={{ transform: "translate3d(-8.07845px, 22.5615px, 0px)" }}
        >
          <path
            className="js-eyes-heart st4"
            d="M131.8,98.8c-0.9-2.8-3-5.3-5.8-6.2c-4.1-1.3-9.1,1.2-11.5,4.6c-1.5,2.1-2.1,4.6-2.9,7c-0.2,0.8-0.8,4-1.8,2.2c-2.2-3.7-6.4-6.2-10.7-4.7c-3.2,1.1-5.2,4.3-5.9,7.4c-1,5,1.4,9.9,4.9,13.4c2.6,2.6,5.7,4.6,8.9,6.5c1.7,1,3.6,1.7,5.2,2.8c1.4,1,4.1,5.8,5.4,3.1c1.1-2.4,1.6-5.1,3-7.4c1.5-2.6,3.4-5,5.1-7.5c3.3-4.7,6.8-9.8,6.9-15.8C132.7,102.5,132.5,100.6,131.8,98.8z"
            style={{ transformOrigin: "0px 0px" }}
            data-svg-origin="112.79780960083008 113.98202133178711"
            transform="matrix(0,0,0,0,112.79781,113.98202)"
          />
          <g
            className="js-eyes-normal"
            data-svg-origin="114.06642150878906 109.7348747253418"
            style={{ transformOrigin: "0px 0px" }}
            transform="matrix(1,0,0,1,0,0)"
          >
            <ellipse
              transform="matrix(0.2938 -0.9559 0.9559 0.2938 -24.3184 186.5732)"
              cx="114.1"
              cy="109.7"
              rx="33"
              ry="23.5"
            />
            <circle className="st1" cx="132.6" cy="120.7" r="11" />
          </g>
        </g>
        <rect
          className="js-eyes-eyelid-left-top st3"
          x="62.9"
          y="22.3"
          width="103.2"
          height="78.5"
          style={{ transformOrigin: "0px 0px" }}
          data-svg-origin="62.89999771118164 22.30000114440918"
          transform="matrix(1,0,0,1,0,0)"
        />
        <rect
          className="js-eyes-eyelid-left-bottom st3"
          x="65.1"
          y="125.7"
          width="89.3"
          height="78.5"
          style={{ transformOrigin: "0px 0px" }}
          data-svg-origin="65.0999984741211 125.70000457763672"
          transform="matrix(1,0,0,1,0,0)"
        />
      </g>
      <g className="right-container">
        <ellipse
          transform="matrix(0.3023 -0.9532 0.9532 0.3023 19.5634 260.2873)"
          className="st0"
          cx="187.6"
          cy="116.8"
          rx="62.3"
          ry="49"
        />
      </g>
      <g clipPath="url(#mask-right)">
        <g
          className="js-eyes-right"
          style={{ transform: "translate3d(-8.07845px, 22.5615px, 0px)" }}
        >
          <path
            className="js-eyes-heart st4"
            d="M158.8,104.8c0.1-7,5.7-13.4,13.1-12.3c2.6,0.4,4.9,1.7,6.8,3.4c1.2,1.1,4,7.1,5.5,4.2c2.4-4.8,7.4-9,12.8-9.9c6.5-1.1,11.6,3.8,12.9,9.9c1.6,7.7-3.9,14.6-8.8,19.9c-5.7,6.1-12.8,11.8-15.3,20c-1.5,4.8-3.8-0.8-5.1-2.8c-1.7-2.6-4-4.7-6.3-6.7c-4.7-4.3-10-8.5-12.9-14.3C160,113,158.8,108.8,158.8,104.8z"
            style={{ transformOrigin: "0px 0px" }}
            data-svg-origin="184.49130249023438 115.96935272216797"
            transform="matrix(0,0,0,0,184.4913,115.96935)"
          />
          <g
            className="js-eyes-normal"
            data-svg-origin="187.0709228515625 113.73528671264648"
            style={{ transformOrigin: "0px 0px" }}
            transform="matrix(1,0,0,1,0,0)"
          >
            <ellipse
              transform="matrix(0.2938 -0.9559 0.9559 0.2938 23.4151 259.1791)"
              cx="187.1"
              cy="113.7"
              rx="35.9"
              ry="25.6"
            />
            <circle className="st1" cx="208.6" cy="121.7" r="11" />
          </g>
        </g>
        <rect
          className="js-eyes-eyelid-right-top st3"
          x="130.6"
          y="22.3"
          width="117.6"
          height="78.5"
          style={{ transformOrigin: "0px 0px" }}
          data-svg-origin="130.59999084472656 22.30000114440918"
          transform="matrix(1,0,0,1,0,0)"
        />
        <rect
          className="js-eyes-eyelid-right-bottom st3"
          x="127.5"
          y="125.7"
          width="117.6"
          height="78.5"
          style={{ transformOrigin: "0px 0px" }}
          data-svg-origin="127.5 125.70000457763672"
          transform="matrix(1,0,0,1,0,0)"
        />
      </g>
    </svg>
  );
};
