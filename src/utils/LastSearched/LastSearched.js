import React, { useEffect, useState } from "react";

class LastSearched extends React.Component {
  render() {
    let search = this.props.cities;
    console.log(search);
    return (
      <ul>
        {search.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    );
  }
}



// function LastSearched(props) {
//     const [search, setSearch] = useState(props.cities);

//     // useEffect(() => {
//     //     setSearch(props.cities);
//     // },[props.cities])

//   return (
//     <ul>
//       {
//       search.map((city => (
//         <li key={city.Key}>{city.Value}</li>
//       )
//       ))}
//     </ul>
//   );
// }

export default LastSearched;
