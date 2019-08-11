import React from "react";

const getPath = (iconName, props) => {
  switch (iconName) {
    case 'question_mark_icon': 
      return (
        <path {...props} fill="currentColor" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377
          c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004
          c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937
          C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938
          c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907
          c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936
          c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993
          c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477
          c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861
          c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/>
      );
    case 'google_icon': 
      return (
        <path {...props} fill="currentColor" d="M74.499,0H50.144c-6.382,0-14.421,0.942-21.158,6.49c-5.09,4.374-7.566,10.392-7.566,15.828
          c0,9.211,7.094,18.546,19.625,18.546c1.182,0,2.477-0.12,3.787-0.235c-0.592,1.413-1.189,2.594-1.189,4.605
          c0,3.662,1.893,5.902,3.547,8.029c-5.314,0.353-15.249,0.942-22.583,5.428c-6.975,4.143-9.107,10.16-9.107,14.414
          C15.499,81.846,23.778,90,40.923,90c20.336,0,31.098-11.22,31.098-22.33c0-8.143-4.729-12.164-9.932-16.534l-4.258-3.305
          c-1.295-1.065-3.068-2.479-3.068-5.08c0-2.597,1.773-4.254,3.307-5.789c4.964-3.896,9.933-8.03,9.933-16.77
          c0-8.979-5.68-13.704-8.396-15.947h7.334L74.499,0z M64.103,72.279c0,7.322-6.033,12.753-17.385,12.753
          c-12.648,0-20.809-6.024-20.809-14.405c0-8.393,7.568-11.218,10.166-12.164c4.969-1.656,11.352-1.891,12.414-1.891
          c1.184,0,1.775,0,2.725,0.115C60.202,63.064,64.103,66.257,64.103,72.279z M54.642,34.249c-1.893,1.886-5.088,3.305-8.045,3.305
          c-10.164,0-14.772-13.113-14.772-21.023c0-3.072,0.592-6.258,2.598-8.74c1.893-2.362,5.201-3.899,8.277-3.899
          c9.812,0,14.899,13.229,14.899,21.73C57.599,27.752,57.358,31.528,54.642,34.249z"/>
      );
    case 'iTunes_icon': 
        return (
          <path {...props} fill="currentColor" d="M45,0C20.148,0,0,20.148,0,45c0,24.852,20.148,45,45,45c24.852,0,45-20.148,45-45C90,20.148,69.852,0,45,0z
            M45,81C25.119,81,9,64.881,9,45S25.119,9,45,9s36,16.119,36,36S64.881,81,45,81z M61.48,57.059
            c0.289,3.828-2.584,7.313-6.422,7.791c-3.832,0.476-7.185-2.24-7.472-6.067c-0.293-3.823,2.59-7.313,6.422-7.787
            c1.214-0.149,2.373,0.019,3.41,0.438V32.639l-18,3.348v23.48h-0.035c0.008,0.066,0.025,0.127,0.025,0.193
            c0.291,3.828-2.584,7.309-6.416,7.787c-3.84,0.475-7.18-2.241-7.471-6.064c-0.295-3.828,2.58-7.316,6.416-7.787
            c1.213-0.154,2.373,0.019,3.41,0.443V26.974v-0.005l26.113-4.46l0.025-0.009v0.004l0.01-0.004l-0.01,0.119v34.25h-0.035
            C61.463,56.936,61.475,56.992,61.48,57.059z"/>
        );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  iconName = "",
  fill = 'currentColor',
  viewBox = '0 0 95 90',
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox={viewBox}
  >
    {getPath(iconName, { fill })}
  </svg>
);

export default SVGIcon;
