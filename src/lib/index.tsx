
export const dateFormate = (isoDate:any) => {
     const date = new Date(isoDate);

     // Extract year, month, and day from the Date object
     const year = date.getFullYear();
     const month = date.getMonth() + 1; // Months are zero-based, so we add 1
     const day = date.getDate();

     // Create the desired format (MM/DD/YYYY)
     const formattedDate = `${month}/${day}/${year}`;
     return formattedDate
}


