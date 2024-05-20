import Link from 'next/link'
import React from 'react'

import {
  DEXSCREENER_URL,
  DEXTOOLS_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from '@/lib/utils'

export default function Footer() {
  return (
    <div className="max-w-2xl h-[10rem] container flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <Link
          href={TWITTER_URL}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <TwitterIcon className="h-5 w-5" />
          </span>
        </Link>
        <Link
          href={TELEGRAM_URL}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Telegram></Telegram>
          </span>
        </Link>
        <Link
          href={INSTAGRAM_URL}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <InstagramIcon />
          </span>
        </Link>
        <Link
          href={DEXSCREENER_URL}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <DexLogo></DexLogo>
          </span>
        </Link>
        <Link
          href={DEXTOOLS_URL}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <DexTools></DexTools>
          </span>
        </Link>
      </div>
      {/* <div className="text-sm text-gray-500 dark:text-gray-400 self-start">© 2024 Dixi. All rights reserved.</div> */}
    </div>
  )
}
//// eslint-disable-next-line
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
// eslint-disable-next-line
function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        fill="currentColor"
        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
      />{' '}
      )
    </svg>
  )
}

function DexLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 2000 2000"
      fill="white"
    >
      <path d="M0 0h2000v2000H0V0zm977.375 102.688c-.734.04-1.469.082-2.226.125-42.925 2.497-85.4 8.97-127.149 19.187l-3.286.799c-83.382 20.568-161.92 61.051-227.986 115.777a460.348 460.348 0 01-4.708 3.815c-6.22 4.99-12.09 10.276-17.91 15.718-3.378 3.156-6.849 6.2-10.325 9.246-2.301 2.186-4.414 4.407-6.539 6.758-10.154 11.089-10.154 11.089-15.308 13.055-3.218.094-5.811-.396-8.938-1.168a389.99 389.99 0 00-4.04-.672c-26.254-4.624-49.923-18.5-70.96-34.328l-1.882-1.406C467.241 242.92 458.991 235.705 451 228l-1.947-1.865C436.843 214.391 426.487 202.053 417 188c-1.232 3.697-.622 4.753.703 8.355l1.204 3.288 1.343 3.544 1.38 3.67C440.74 257.153 470.107 302.687 503 345l1.465 1.895c6.19 8.002 12.575 15.804 19.156 23.487a751.978 751.978 0 014.164 4.934c5.12 6.106 10.328 12.094 15.73 17.954a375.461 375.461 0 015.734 6.46c12.265 14.027 25.485 27.164 38.67 40.319 2.536 2.53 5.068 5.066 7.6 7.603a5383.64 5383.64 0 005.958 5.959c1.381 1.38 2.76 2.763 4.14 4.145 4.416 4.4 8.88 8.672 13.619 12.721 3.178 2.743 6.21 5.644 9.264 8.523 5.086 4.767 10.197 9.475 15.5 14l3.098 2.66a4775.7 4775.7 0 007.175 6.149c2.469 2.111 4.932 4.229 7.391 6.351 5.789 4.992 11.6 9.928 17.602 14.664 2.13 1.695 4.24 3.406 6.343 5.133a638.507 638.507 0 0024.598 19.215c3.426 2.544 6.8 5.146 10.168 7.765 7.112 5.51 14.42 10.747 21.735 15.981 2.28 1.643 4.553 3.296 6.82 4.957 10.764 7.857 21.727 15.338 32.883 22.625l2.513 1.647C812.78 618.787 841.884 636.162 872 652c1.093.575 2.187 1.15 3.313 1.744 3.304 1.727 6.618 3.433 9.937 5.131l3.086 1.608 2.867 1.447 2.52 1.288c2.637.905 3.715.8 6.277-.218 2.19-1.417 4.311-2.87 6.438-4.375 35.68-24.306 79.434-35.224 122.143-27.136 22.566 4.633 42.415 13.37 62.017 25.335l1.711 1.037C1094 659 1094 659 1095.671 660.487c1.752 1.515 3.187 2.623 5.329 3.513 3.313-.31 6.02-1.572 9-3l2.22-.995c2.33-1.077 4.617-2.216 6.905-3.38l2.583-1.303c9.71-4.955 19.15-10.377 28.605-15.795a637.718 637.718 0 019.527-5.282c21.96-12.021 42.732-25.798 63.478-39.77a1997.92 1997.92 0 0110.166-6.788 569.876 569.876 0 0013.579-9.312l2.144-1.518c27.909-19.83 55.148-40.759 81.207-62.972a508.155 508.155 0 0110.211-8.447c4.76-3.874 9.303-7.946 13.82-12.098a342.898 342.898 0 016.618-5.902c8.548-7.441 16.889-15.11 25.192-22.822 1.698-1.573 3.405-3.136 5.112-4.698 9.466-8.715 18.59-17.767 27.696-26.856l1.928-1.92c9.087-9.016 9.087-9.016 17.626-18.545 1.548-1.788 3.194-3.441 4.883-5.097 3.014-2.967 5.8-6.073 8.559-9.277 2.229-2.553 4.521-5.042 6.816-7.536 4.07-4.462 7.927-9.05 11.719-13.75 2.704-3.3 5.488-6.524 8.281-9.75 5.938-6.89 11.6-13.961 17.125-21.187l1.715-2.242c31.333-41.104 60-85.146 78.785-133.508l1.278-3.283c2.256-5.949 4.02-11.718 5.222-17.967-3.136 2.974-5.655 6.128-8.188 9.625-3.662 4.943-7.524 9.55-11.69 14.07a246.01 246.01 0 00-5.685 6.43c-5.973 6.84-12.489 13.038-19.437 18.875l-1.624 1.379c-14.977 12.669-30.988 23.528-48.376 32.621l-1.829.964c-12.16 6.313-25.582 11.067-39.171 13.036l-2.684.625c-4.275.582-7.58.63-11.201-1.989-4.124-3.673-7.808-7.753-11.488-11.863-1.917-2.088-3.957-3.952-6.127-5.773a102.228 102.228 0 01-7-6.5c-3.663-3.712-7.536-7.114-11.5-10.5l-2.8-2.43c-8.02-6.913-16.345-13.373-24.8-19.742a495.996 495.996 0 01-5.31-4.107c-8.016-6.275-16.283-12.051-24.777-17.659-.658-.435-1.315-.87-1.992-1.32-10.297-6.821-20.632-13.546-31.321-19.742l-2.723-1.582c-69.005-39.842-143.771-64.09-286.965-81.043l-2.245-.122c-12.24-.582-24.464-.253-36.692.434zM472 432c-18.791 35.855-35.602 71.78-49 110l-1.272 3.612c-22.289 64.092-30.826 131.492-30.902 199.101l-.02 7.462c-.014 5.314-.026 10.628-.036 15.942-.014 7.742-.035 15.484-.058 23.226-.038 12.646-.073 25.291-.105 37.937l-.006 2.283c-.026 10.62-.05 21.24-.073 31.861l-.005 2.254-.005 2.252c-.027 12.57-.061 25.138-.101 37.707-.023 7.007-.041 14.014-.05 21.02-.064 45.118-.648 90.28-4.18 135.28l-.255 3.364C381.617 1121.967 374.251 1178.28 363 1234l-.523 2.597c-17.187 85.147-42.69 168.272-114.214 326.983l-1.368 2.53-1.193 2.155L245 1570l1 2a662784.072 662784.072 0 009.174-7.454c3.701-3.006 7.401-6.013 11.1-9.023 6.332-5.15 12.67-10.291 19.054-15.378 2.795-2.244 5.574-4.506 8.351-6.77 5.713-4.657 11.445-9.281 17.259-13.813 6.005-4.683 11.88-9.513 17.745-14.37a656.031 656.031 0 0115.008-12.008c4.67-3.649 9.245-7.404 13.809-11.184a776.87 776.87 0 0117.618-14.172c4.356-3.403 8.647-6.88 12.917-10.39 8.567-7.044 17.157-14.056 25.902-20.876 5.342-4.166 10.591-8.435 15.813-12.75l2.188-1.807 2.125-1.755c3.218-2.659 6.442-5.31 9.687-7.938.717-.58 1.433-1.162 2.172-1.761 2.27-1.695 4.627-3.133 7.078-4.551l.836 2.21c1.097 2.63 2.334 4.973 3.781 7.423l1.57 2.66 1.688 2.832 1.764 2.972a819.869 819.869 0 0012.637 20.45c6.338 9.957 12.486 20.03 18.66 30.09 3.35 5.457 6.707 10.91 10.064 16.363 4.036 6.558 8.072 13.116 12.105 19.676 6.12 9.949 12.242 19.896 18.395 29.824a11349.566 11349.566 0 0120.452 33.17c4.009 6.518 8.02 13.036 12.032 19.552 3.068 4.985 6.135 9.97 9.195 14.96C586.92 1625.7 586.92 1625.7 598 1643c7.49-3.423 13.081-10.034 18.781-15.813 2.627-2.589 5.389-4.975 8.188-7.374 2.267-2.024 4.397-4.15 6.531-6.313 3.361-3.407 6.837-6.575 10.469-9.688 2.267-2.023 4.397-4.149 6.531-6.312 3.361-3.407 6.837-6.575 10.469-9.688 2.267-2.023 4.397-4.149 6.531-6.312 2.728-2.766 5.485-5.413 8.438-7.938 3.172-2.718 6.125-5.59 9.062-8.562a177.786 177.786 0 0111.004-10.223c3.063-2.727 5.898-5.671 8.777-8.59 2.627-2.589 5.389-4.975 8.188-7.374 2.267-2.024 4.397-4.15 6.531-6.313 3.361-3.407 6.837-6.575 10.469-9.688 2.267-2.023 4.397-4.149 6.531-6.312 4-4.048 8.166-7.815 12.5-11.5l4-3.438 3-2.562.784 2.133c1.32 3.112 2.91 5.857 4.673 8.742l1.028 1.689c1.105 1.814 2.216 3.625 3.327 5.436l2.32 3.8a4478.306 4478.306 0 0018.32 29.71c2.625 4.223 5.243 8.45 7.86 12.678l1.61 2.598c7.74 12.506 15.436 25.038 23.14 37.567 6.8 11.057 13.6 22.113 20.438 33.147 8.22 13.264 16.388 26.56 24.562 39.853 6.8 11.057 13.6 22.113 20.438 33.147a11349.566 11349.566 0 0120.452 33.17c3.348 5.444 6.698 10.887 10.048 16.33a64216.37 64216.37 0 0112.105 19.676c6.12 9.949 12.242 19.896 18.395 29.824a11349.566 11349.566 0 0120.452 33.17l6.06 9.85 1.998 3.247c1.319 2.143 2.64 4.285 3.96 6.427a1805.64 1805.64 0 019.363 15.323 3034.64 3034.64 0 004.416 7.288c1.044 1.725 2.078 3.455 3.112 5.185l1.909 3.139 1.675 2.783c1.458 2.373 1.458 2.373 4.555 3.088l.895-1.503a2331.955 2331.955 0 0122.477-36.878 8681.119 8681.119 0 009.548-15.403c7.05-11.391 14.063-22.805 21.08-34.216 8.008-13.023 16.02-26.044 24.074-39.04 6.315-10.195 12.595-20.413 18.878-30.63 3.348-5.444 6.698-10.887 10.048-16.33l4-6.5 8-13 2-3.251 3.993-6.488c3.372-5.478 6.743-10.957 10.112-16.437 6.641-10.797 13.292-21.589 19.969-32.364 6.315-10.195 12.595-20.413 18.878-30.63 4.012-6.523 8.026-13.045 12.04-19.568a56286.76 56286.76 0 0010.113-16.438c6.635-10.788 13.28-21.57 19.951-32.335 6.355-10.258 12.673-20.538 18.993-30.817 3.316-5.392 6.634-10.782 9.951-16.172 6.329 4.303 11.51 9.388 16.853 14.822 3.635 3.69 7.336 7.193 11.292 10.541 3.025 2.669 5.805 5.579 8.636 8.45a120.266 120.266 0 006.219 5.687c3.792 3.25 7.271 6.754 10.777 10.309 2.65 2.612 5.435 5.024 8.258 7.445 2.782 2.472 5.359 5.13 7.969 7.781 1.917 1.887 3.892 3.652 5.934 5.402 2.99 2.57 5.793 5.256 8.562 8.063 2.728 2.766 5.485 5.413 8.438 7.938 4.093 3.507 7.834 7.32 11.62 11.152 2.714 2.679 5.55 5.156 8.446 7.633 3.063 2.727 5.898 5.671 8.777 8.59a120.266 120.266 0 006.219 5.687c2.971 2.547 5.751 5.214 8.5 8 5.835 5.906 12.123 11.197 18.5 16.5 8.042-12.8 16.024-25.632 23.865-38.556 5.458-8.992 10.992-17.936 16.54-26.873 10.24-16.498 20.424-33.03 30.595-49.571 8.008-13.023 16.02-26.044 24.074-39.04 6.313-10.19 12.59-20.404 18.869-30.616 2.045-3.324 4.092-6.647 6.139-9.969A7514.206 7514.206 0 001547 1407c2.767 1.291 5.05 2.706 7.398 4.652l1.93 1.586 2.047 1.7a4240.034 4240.034 0 006.53 5.359c2.98 2.422 6.002 4.784 9.033 7.14 6.005 4.683 11.88 9.514 17.745 14.371A582.913 582.913 0 001605 1452.5c5.987 4.66 11.84 9.47 17.684 14.309A583.134 583.134 0 001636 1477.5c5.987 4.66 11.84 9.47 17.684 14.309A583.134 583.134 0 001667 1502.5c5.241 4.08 10.385 8.264 15.5 12.5a776.87 776.87 0 0017.618 14.172c4.351 3.4 8.637 6.87 12.902 10.379 3.67 3.016 7.355 6.015 11.043 9.012l2.093 1.701c4.467 3.626 8.951 7.228 13.45 10.814 4.492 3.606 8.942 7.266 13.394 10.922l2-1-1.17-2.234c-26.365-50.396-49.19-102.214-68.153-155.852-.702-1.984-1.407-3.967-2.112-5.95-31.636-89.173-52.055-182.081-71.565-362.964l-.176-2.725c-1.519-23.854-2.02-47.73-2.351-71.627l-.032-2.247c-.426-30.098-.558-60.196-.642-90.296-.01-3.622-.02-7.244-.032-10.865-.067-22.376-.131-44.752-.168-67.128-.019-11.188-.048-22.376-.088-33.565-.021-5.845-.037-11.691-.04-17.537-.04-79.472-11.854-156.224-72.721-300.51l-1.116-2.21a741.601 741.601 0 00-3.15-6.134l-1.82-3.537c-1.456-2.9-1.456-2.9-4.664-3.619l-1.477 2.176c-9.906 14.464-20.287 28.524-31.437 42.054-2.949 3.582-5.805 7.23-8.649 10.895-4.217 5.417-8.609 10.657-13.106 15.843a314.532 314.532 0 00-8.581 10.344c-5.861 7.223-12.364 13.862-18.77 20.599a1092.364 1092.364 0 00-8.793 9.402l-1.47 1.577A94.077 94.077 0 001426 553l.975 1.902c12.112 23.712 22.825 47.426 28.838 73.473l.59 2.552c3.014 13.785 3.977 27.268 3.91 41.323l-.007 2.47c-.05 11.978-.372 23.607-3.306 35.28l-.634 2.557c-6.289 24.692-16.435 48.385-32.366 68.443l-1.263 1.605c-36.815 46.31-92.251 72.732-150.42 79.77-13.055 1.4-26.208 1.96-39.317 2.625l.372 3.076c.338 2.817.669 5.633.991 8.451.433 3.766.895 7.528 1.367 11.29.26 2.164.517 4.33.77 6.495l.407 3.45c.846 7.879 1.237 15.694 1.413 23.617l.162 5.997c.105 3.958.151 7.912.168 11.871-.174 9.018-.174 9.018 3.023 17.123 2.37 1.625 4.648 2.596 7.327 3.63a253.78 253.78 0 015.652 3.34c2.094 1.202 4.189 2.401 6.285 3.597l5.19 2.978a7366.52 7366.52 0 005.35 3.065c5.515 3.16 11.018 6.341 16.523 9.52l6.5 3.75 13 7.5 3.25 1.875 6.496 3.748a25830.6 25830.6 0 0016.324 9.412 5512.287 5512.287 0 0131.305 18.153 2523.98 2523.98 0 0024.342 14.046 4740.254 4740.254 0 0129.22 16.766l3.014 1.734c4.443 2.584 8.663 5.117 12.549 8.516a4109.277 4109.277 0 01-36.5 20.5 3450.765 3450.765 0 00-27.942 15.658c-12.215 6.919-24.472 13.76-36.724 20.613-14.967 8.37-29.933 16.741-44.834 25.229l-2.422 1.375c-22.634 12.88-43.171 28.365-59.422 48.914-2.212 2.781-4.522 5.458-6.843 8.149-16.927 20.312-30.529 43.498-43.313 66.562l-1.714 3.08c-16.803 30.33-31.204 61.823-44.286 93.92l-.895 2.195c-34.316 84.32-61.203 171.453-97.049 294.923l-2.724 9.445-.675 2.339a8485.932 8485.932 0 01-14.082 48.21l-1.69 5.737c-4.151 14.098-8.389 28.16-12.885 42.151-2.018-5.265-3.863-10.535-5.512-15.926l-.729-2.37c-.82-2.67-1.634-5.343-2.447-8.016l-.883-2.9c-6.59-21.657-12.847-43.41-19.116-65.163C944.958 1591.197 918.43 1499.702 852 1332l-.9-1.967c-15.852-34.669-33.168-68.744-55.1-100.033l-1.506-2.158c-7.041-10.04-14.378-19.65-22.494-28.842l-2.156-2.492A319.082 319.082 0 00763 1189l-1.56-1.68c-19.486-20.804-43.483-33.764-68.17-47.404a3594.38 3594.38 0 01-18.02-10.041l-3.12-1.747a6069.392 6069.392 0 01-23.326-13.164A2991.031 2991.031 0 00626.5 1102.5a3410.483 3410.483 0 01-27.887-15.628c-11.18-6.333-22.397-12.602-33.613-18.872 2.93-2.288 5.94-4.2 9.164-6.047l3.11-1.787 3.351-1.916 3.496-2.008 7.266-4.17a7552.847 7552.847 0 0016.738-9.634l3.265-1.883c7.176-4.14 14.334-8.31 21.485-12.493 9.27-5.421 18.583-10.764 27.913-16.081a2811.427 2811.427 0 0027.279-15.764 4055.233 4055.233 0 0121.808-12.654l3.239-1.868 13.403-7.72 7.07-4.07c2.203-1.27 4.407-2.54 6.612-3.807l3.051-1.758 2.64-1.52c1.54-.9 1.54-.9 3.11-1.82l2.532-1.17c5.224-2.524 5.224-2.524 8.428-7.113.423-2.813.528-5.49.532-8.334l.126-3.146c.084-2.22.147-4.442.19-6.663.112-5.78.376-11.555.614-17.332l.128-3.458c.373-9.588 1.27-19.032 2.575-28.534l.519-3.843c.436-3.138.892-6.273 1.356-9.407.334-2.333.668-4.666 1-7l-2.693-.12C708.46 862.28 652.027 850.964 608 814l-1.764-1.465c-37.513-31.213-61.448-73.82-66.857-122.558-3.938-44.798 8.647-87.933 29.363-127.286l1.692-3.222 1.56-2.893c1.16-2.443 1.16-2.443.89-4.679-1.126-2.418-2.536-3.87-4.454-5.725l-2.22-2.176-2.335-2.246c-4.976-4.83-9.807-9.68-14.325-14.946-2.084-2.426-4.255-4.767-6.425-7.116-4.07-4.463-7.927-9.05-11.719-13.75-2.704-3.302-5.487-6.525-8.281-9.75-5.943-6.886-11.57-13.989-17.125-21.188l-2.488-3.207A1634.466 1634.466 0 01490 454.063l-1.517-2.016a403.704 403.704 0 01-7.397-10.176l-1.387-1.975a438.771 438.771 0 01-2.578-3.732c-.992-1.423-2.05-2.8-3.121-4.164h-2zm177 188c-3.35 7.907-6.395 15.817-8.813 24.063l-.625 2.124c-6.19 21.675-4.077 45.91 6.675 65.658 15.152 26.234 41.82 41.452 70.282 49.512 2.155.575 4.314 1.119 6.481 1.643l2.063.5c40.428 9.225 83.905-.289 119.937-19.5-2.67-3.155-6.07-4.747-9.703-6.555l-4.124-2.091c-.721-.364-1.443-.727-2.186-1.1-14.57-7.348-28.878-15.05-42.987-23.254l-5.241-3.026c-44.09-25.48-88.303-53.577-127.486-86.247-2.063-1.929-2.063-1.929-4.273-1.727zm694.438 4.25c-1.195.927-2.39 1.852-3.586 2.777l-1.914 1.48c-5.928 4.566-11.93 9.033-17.938 13.493l-1.936 1.446C1267.198 681.337 1211.7 713.726 1155 742v2c42.924 21.69 90.086 29.778 136.75 14.875 26.016-8.913 49.981-25.24 63.25-49.875 10.857-22.724 10.48-47.986 2.504-71.602-2.144-5.984-4.589-11.74-7.504-17.398-2.291 0-4.765 2.842-6.563 4.25zM912.375 771.813c-40.12 45.998-54.397 108.988-54.544 168.775-.007 2.36-.023 4.72-.041 7.081-.052 6.7-.1 13.401-.116 20.102-.01 4.126-.04 8.251-.081 12.377a503.287 503.287 0 00-.015 4.673c.013 12.43-1.574 22.316-10.48 31.628-5.882 5.203-13.356 8.439-20.266 12.04-4.859 2.593-9.59 5.4-14.332 8.198-6.621 3.892-13.256 7.758-19.934 11.551l-1.896 1.079c-3.045 1.73-6.092 3.457-9.143 5.178-6.35 3.604-12.53 7.338-18.527 11.505 2.154 2.324 4.289 3.892 7.035 5.46l2.426 1.41 2.601 1.505c13.76 8.106 26.673 17.398 38.938 27.625l2.96 2.438c13.902 11.532 27.266 23.849 39.04 37.562.895 1.02 1.791 2.04 2.688 3.059 26.265 30.014 46.477 64.414 64.312 99.941l1.346 2.663c28.418 56.588 46.79 118.181 65.702 178.414l1.132 3.603 2.093 6.682c1.85 5.9 3.752 11.778 5.727 17.638h2l1.015-3.29C1057.17 1272.16 1057.17 1272.16 1101 1200l1.59-2.63c6.863-11.287 14.3-21.947 22.41-32.37a5437.95 5437.95 0 002.742-3.578A522.534 522.534 0 011136 1151l1.357-1.678c7.404-9.06 15.523-17.409 23.768-25.697l1.53-1.546A239.38 239.38 0 011184 1103c1.209-1 2.415-2.004 3.617-3.012 15.318-12.659 32.135-23.177 49.383-32.988-2.4-2.656-4.964-4.28-8.066-6.047l-3.12-1.788-3.377-1.915-3.502-2.003c-2.43-1.39-4.86-2.779-7.292-4.165-5.665-3.234-11.309-6.504-16.956-9.77-6.212-3.59-12.429-7.172-18.671-10.71l-2.859-1.623c-1.739-.986-3.48-1.969-5.223-2.948-11.445-6.49-20.334-12.2-24.934-25.031-.861-3.574-1.114-6.852-1.082-10.523l.02-3.295.035-3.557.037-7.621c.024-3.961.052-7.922.086-11.883.19-23.668-.434-47.35-3.846-70.808l-.513-3.581c-6.089-40.55-19.512-81.297-46.737-112.732l-2.07-2.402c-20.683-23.463-47.157-46.321-79.637-49.47-39.936-2.244-70.517 18.368-96.918 46.684z"></path>
    </svg>
  )
}

function DexTools() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.8 1.371c-1.437.742-2.612 1.371-2.612 1.399.003.066 3.449 1.8 3.574 1.796.054-.003.457-.187.894-.41l.797-.406.871.441.867.446L13.617 4c2.145-.957 2.367-1.063 2.336-1.098-.047-.047-.816-.457-2.906-1.55A291.567 291.567 0 0110.87.203c-.187-.105-.367-.191-.398-.187-.032 0-1.235.609-2.672 1.355zM1.5 4.613l-1.496.77V8.75c0 1.855.02 3.371.043 3.371.023 0 .758-.316 1.637-.703l1.59-.707V7.16l.777.421c.601.324 1.199.648 1.8.969l1.02.55.457-.203c.285-.128.567-.257.852-.39.218-.102.758-.34 1.199-.535.437-.192.844-.387.902-.434.074-.059-.86-.57-3.453-1.894-1.953-.997-3.617-1.81-3.695-1.805-.074.004-.813.351-1.633.773zm14.723.215c-1.02.457-1.856.852-1.856.871 0 .024.555.352 1.235.73.68.38 1.234.708 1.234.735 0 .024-.602.313-1.336.645-.734.328-2.594 1.16-4.129 1.851l-5.144 2.313-2.594 1.164C.988 14.328.262 14.657.164 14.715c-.102.055-.125.387-.144 2.05L0 18.75l1.336.676 1.34.676 1.855-.832c1.02-.457 1.856-.856 1.856-.883 0-.032-.192-.153-.422-.274-.23-.117-.703-.383-1.055-.59-.351-.203-.703-.39-.777-.418-.078-.023-.14-.066-.14-.097.003-.028.82-.414 1.816-.856 1.937-.859 3.418-1.523 6.601-2.953 1.422-.64 2.844-1.277 4.266-1.918 1.25-.558 2.707-1.215 3.234-1.453l.957-.437.02-2.008.023-2.004-1.36-.691c-.745-.383-1.382-.692-1.417-.692-.031 0-.895.375-1.91.832zm4.28 7.238a39.11 39.11 0 01-.878.407c-.285.125-.82.363-1.191.53l-.68.31-.016 1.761c-.008.969-.043 1.758-.078 1.754-.082-.012-1.351-.66-2.629-1.34-.922-.492-.98-.511-1.199-.406-.125.063-.871.395-1.664.742-.79.348-1.461.653-1.492.68-.031.027 1.558.883 3.531 1.902l3.59 1.856 1.535-.79c.844-.433 1.563-.831 1.594-.878.074-.114.066-6.719-.008-6.711a3.823 3.823 0 00-.414.183zm-8.491 7.754l-.801.34c-.8.348-.645.36-1.598-.113-.636-.317-.914-.414-1.031-.367-.09.035-.86.379-1.707.765-.852.383-1.574.7-1.613.7-.356 0 .238.351 2.527 1.5l2.68 1.343 1.129-.554c.62-.305 1.875-.914 2.785-1.356.91-.441 1.64-.812 1.629-.828-.016-.012-.778-.402-1.696-.863l-1.668-.84zm0 0"
      ></path>
    </svg>
  )
}
function Telegram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 92 93">
      <path
        fill="#fff"
        d="M25.473 44.72S44.1 36.876 50.56 34.112c2.477-1.105 10.876-4.641 10.876-4.641s3.876-1.547 3.553 2.21c-.108 1.547-.97 6.962-1.83 12.819-1.293 8.287-2.692 17.349-2.692 17.349s-.216 2.542-2.046 2.984-4.846-1.548-5.384-1.99c-.43-.331-8.076-5.304-10.875-7.735-.754-.663-1.615-1.989.107-3.536 3.877-3.647 8.507-8.178 11.306-11.05 1.292-1.327 2.584-4.42-2.8-.664-7.644 5.415-15.182 10.498-15.182 10.498s-1.722 1.105-4.953.11c-3.23-.994-6.999-2.32-6.999-2.32s-2.584-1.657 1.83-3.426z"
      ></path>
    </svg>
  )
}
