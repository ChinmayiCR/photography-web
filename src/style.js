const styles = {
    boxWidth: "xl:max-w-[1180px] w-full mx-auto",

    heading2: "font-sans font-bold xs:text-[48px] text-[40px] text-ink xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-sans font-normal text-muted text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "lg:px-16 sm:px-10 px-5",
    paddingY: "sm:py-20 py-12",
    padding: "lg:px-16 sm:px-10 px-5 sm:py-14 py-8",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
