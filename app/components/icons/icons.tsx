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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill={data.fill}
      className={data.classDropDown}
    >
      <path d="M10 12 6 8h8Z" />
    </svg>
  );
}

export function IconaPosition(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill={data.fill}
      className={`${data.fill}`}
    >
      <path d="M10 12.542q1.188 0 2.146-.594t1.5-1.531q-.771-.605-1.698-.948-.927-.344-1.948-.344t-1.948.344q-.927.343-1.698.948.542.937 1.5 1.531.958.594 2.146.594Zm0-4.167q.708 0 1.208-.5t.5-1.208q0-.709-.5-1.209-.5-.5-1.208-.5t-1.208.5q-.5.5-.5 1.209 0 .708.5 1.208t1.208.5ZM10 16q2.521-2.312 3.719-4.177 1.198-1.865 1.198-3.323 0-2.271-1.417-3.677-1.417-1.406-3.5-1.406T6.5 4.823Q5.083 6.229 5.083 8.5q0 1.458 1.198 3.323T10 16Zm0 2.333q-3.354-2.895-5.01-5.312Q3.333 10.604 3.333 8.5q0-3.146 2-4.99 2-1.843 4.667-1.843t4.667 1.843q2 1.844 2 4.99 0 2.104-1.657 4.521-1.656 2.417-5.01 5.312ZM10 8.5Z" />
    </svg>
  );
}

export function IconaSortByAlpha(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      className={`${data.fill}`}
    >
      <path d="m2 14 3-8h1.729l3 8H8.062l-.666-1.917H4.333L3.667 14Zm2.812-3.292h2.084l-1-2.979h-.084ZM11.146 14v-1.521l4.062-5.041h-3.875V6h5.625v1.521l-4.02 5.041H17V14ZM7.5 4.5 10 2l2.5 2.5ZM10 18l-2.5-2.5h5Z" />
    </svg>
  );
}

export function IconaSortByAtoZ(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-alpha-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
      />
      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
    </svg>
  );
}

export function IconaSortByZtoA(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-alpha-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
      />
      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
    </svg>
  );
}

export function IconaSortByNewest(data: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sort-up-alt" viewBox="0 0 16 16">
  <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
</svg>
  );
}

export function IconaSortByOldest(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-up-alt"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
    </svg>
  );
}

export function IconaOperatorSearch(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      className={`${data.fill}`}
    >
      <path d="M9 10q-1.25 0-2.125-.875T6 7q0-1.25.875-2.125T9 4q1.25 0 2.125.875T12 7q0 1.25-.875 2.125T9 10Zm0-1.5q.625 0 1.062-.438Q10.5 7.625 10.5 7t-.438-1.062Q9.625 5.5 9 5.5t-1.062.438Q7.5 6.375 7.5 7t.438 1.062Q8.375 8.5 9 8.5Zm9.438 11-2.563-2.562q-.437.25-.906.406-.469.156-.969.156-1.458 0-2.479-1.021Q10.5 15.458 10.5 14q0-1.458 1.021-2.479Q12.542 10.5 14 10.5q1.458 0 2.479 1.021Q17.5 12.542 17.5 14q0 .5-.156.969t-.406.906l2.562 2.563ZM14 16q.833 0 1.417-.583Q16 14.833 16 14q0-.833-.583-1.417Q14.833 12 14 12q-.833 0-1.417.583Q12 13.167 12 14q0 .833.583 1.417Q13.167 16 14 16ZM3 16v-2q0-.521.26-.958.261-.438.719-.688 1.375-.792 2.906-1.135 1.532-.344 3.094-.177-.229.333-.427.698-.198.364-.323.76-1.187-.042-2.333.26-1.146.302-2.167.907-.104.041-.167.135-.062.094-.062.198v.5h4.521q.041.396.135.771t.261.729Zm6-9Zm.021 7.5Z" />
    </svg>
  );
}

export function IconaOrderByPrice1(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-numeric-down"
      viewBox="0 0 16 16"
    >
      <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
      <path
        fillRule="evenodd"
        d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
      />
      <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
    </svg>
  );
}

export function IconaComune(data:any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
</svg>
  )
}

export default {
  IconaProduttore,
  IconaUtente,
  IconaBack,
  IconaHome,
  IconaDropDown,
  IconaPosition,
  IconaSortByAlpha,
  IconaSortByAtoZ,
  IconaSortByZtoA,
  IconaSortByNewest,
  IconaOperatorSearch,
  IconaSortByOldest,
  IconaComune,
};
