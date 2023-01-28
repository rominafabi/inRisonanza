export function IconaProduttore(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill={data.fill}
      viewBox="0 0 48 48"
    >
      <path d="M13.05 40q-1.3 0-2.15-.85-.85-.85-.85-2.15 0-.9.45-1.725.45-.825 1.3-1.175l8.6-3.4v-6.9q-3.3 4.05-6.7 6.1-3.4 2.05-7.7 2.05v-3q3.4 0 6.2-1.575Q15 25.8 17.25 22.95l2.9-3.25q.5-.6 1.175-1t1.475-.4h2.4q.8 0 1.5.4t1.2 1l2.9 3.25q2.4 2.75 5.1 4.375 2.7 1.625 6.1 1.625v3q-4.25 0-7.675-2.05T27.6 23.8v6.9l8.6 3.4q.85.35 1.3 1.175.45.825.45 1.725 0 1.3-.85 2.15-.85.85-2.15.85H19.8v-.55q0-1.3.8-2.1t2.1-.8h6.65q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3H22.7q-2.2 0-3.5 1.35-1.3 1.35-1.3 3.55V40ZM24 15.3q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q22.5 8 24 8q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q25.5 15.3 24 15.3Z" />
    </svg>
  );
}

export function IconaUtente(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill={data.fill}
      viewBox="0 0 45 48"
    >
      <path d="M18.4 44V17.1q-4.75-1-7.625-4.275Q7.9 9.55 7.9 5.2h3q0 3.9 3.025 6.55T21.3 14.4h5q1.9 0 2.8.325.9.325 2.3 1.525l9.2 8.6L38.45 27l-9.25-8.7V44h-3V31.25h-4.8V44Zm5.4-32.7q-1.5 0-2.575-1.075Q20.15 9.15 20.15 7.65q0-1.5 1.075-2.575Q22.3 4 23.8 4q1.5 0 2.575 1.075Q27.45 6.15 27.45 7.65q0 1.5-1.075 2.575Q25.3 11.3 23.8 11.3Z" />
    </svg>
  );
}

export function IconaBack(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      fill={data.fill}
    >
      <path d="M20 33.333 6.667 20 20 6.667l1.958 1.958-10 10h21.375v2.75H11.958l10 10Z" />
    </svg>
  );
}

export function IconaHome(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      fill={data.fill}
    >
      <path d="M8.333 33.333V20h-5L20 5l7.792 6.917V7.208h3.875v8.25l5 4.542h-5v13.333h-9.709v-10h-3.916v10Zm2.792-2.791h4.167v-10h9.416v10h4.167V16.75L20 8.708l-8.875 8.042Zm4.167-10h9.416-9.416Zm1.25-4.125h6.916q0-1.375-1.041-2.25-1.042-.875-2.417-.875-1.375 0-2.417.875-1.041.875-1.041 2.25Z" />
    </svg>
  );
}

export function IconaDropDown(data: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={data.fill} className={data.classDropDown}>
      <path d="M10 12 6 8h8Z" />
    </svg>
  );
}

export default { IconaProduttore, IconaUtente, IconaBack, IconaHome, IconaDropDown };
