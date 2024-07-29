import { useEffect, useState } from 'react';

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/tmanatkin/tanner-atkin-xyz/commits?per_page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        // format date
        const lastCommitDate = new Date(data[0].commit.author.date);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
        }).format(lastCommitDate);
        // set to formatted date
        setLastUpdated(formattedDate);
      })
      .catch((error) => {
        setLastUpdated(new Date().getFullYear().toString());
      });
  }, []);

  return (
    <footer>
      <p>Created by Tanner Atkin</p>
      <p>Updated {lastUpdated}</p>
    </footer>
  );
};

export default Footer;
