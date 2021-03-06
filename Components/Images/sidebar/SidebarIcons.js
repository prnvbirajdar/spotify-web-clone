import styles from "../../../styles/sidebarIcons.module.css";

const HomeIcon = ({ height, width }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.svg}
      width={width}
      height={height}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  );
};

const SearchIconBase = ({ height, width }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.svg}
      width={width}
      height={height}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};

const LibraryIcon = ({ height, width }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.svg}
      width={width}
      height={height}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
    </svg>
  );
};

export { HomeIcon, SearchIconBase, LibraryIcon };
