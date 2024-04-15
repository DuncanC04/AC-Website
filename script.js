document.addEventListener("DOMContentLoaded", function () {
    // Data scraped and put together by Chat GPT, few errors manually fixed
    const historyData = [
        { year: 1851, location: "Isle of Wight, England", hostTeam: "Royal Yacht Squadron", winningTeam: "America", boatType: "Schooner" },
        { year: 1870, location: "Sandy Hook, New York", hostTeam: "New York Yacht Club", winningTeam: "Magic", boatType: "Schooner" },
        { year: 1871, location: "Cowes, Isle of Wight", hostTeam: "Royal Yacht Squadron", winningTeam: "America", boatType: "Schooner" },
        { year: 1876, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Madeline", boatType: "Sloop" },
        { year: 1881, location: "New York Harbor, New York", hostTeam: "New York Yacht Club", winningTeam: "Mischief", boatType: "Sloop" },
        { year: 1885, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Puritan", boatType: "Sloop" },
        { year: 1886, location: "New York Harbor, New York", hostTeam: "New York Yacht Club", winningTeam: "Mayflower", boatType: "Sloop" },
        { year: 1887, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Volunteer", boatType: "Sloop" },
        { year: 1893, location: "Sandy Hook, New York", hostTeam: "New York Yacht Club", winningTeam: "Vigilant", boatType: "Sloop" },
        { year: 1895, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Defender", boatType: "Sloop" },
        { year: 1899, location: "New York Harbor, New York", hostTeam: "New York Yacht Club", winningTeam: "Columbia", boatType: "Sloop" },
        { year: 1901, location: "Newport, Rhode Island", hostTeam: "Columbia Yacht Club", winningTeam: "Columbia", boatType: "Sloop" },
        { year: 1903, location: "Sandy Hook, New York", hostTeam: "New York Yacht Club", winningTeam: "Reliance", boatType: "Sloop" },
        { year: 1920, location: "Sandy Hook, New York", hostTeam: "New York Yacht Club", winningTeam: "Resolute", boatType: "Sloop" },
        { year: 1930, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Enterprise", boatType: "J-Class" },
        { year: 1934, location: "Sandy Hook, New York", hostTeam: "New York Yacht Club", winningTeam: "Rainbow", boatType: "J-Class" },
        { year: 1937, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Ranger", boatType: "J-Class" },
        { year: 1958, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Columbia", boatType: "12-Metre" },
        { year: 1962, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Weatherly", boatType: "12-Metre" },
        { year: 1967, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Intrepid", boatType: "12-Metre" },
        { year: 1970, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Intrepid", boatType: "12-Metre" },
        { year: 1974, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Courageous", boatType: "12-Metre" },
        { year: 1977, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Courageous", boatType: "12-Metre" },
        { year: 1980, location: "Newport, Rhode Island", hostTeam: "New York Yacht Club", winningTeam: "Freedom", boatType: "12-Metre" },
        { year: 1983, location: "Newport, Rhode Island", hostTeam: "Royal Perth Yacht Club", winningTeam: "Australia II", boatType: "12-Metre" },
        { year: 1987, location: "Fremantle, Australia", hostTeam: "Royal Perth Yacht Club", winningTeam: "Kookaburra III", boatType: "12-Metre" },
        { year: 1988, location: "San Diego, California", hostTeam: "San Diego Yacht Club", winningTeam: "Stars & Stripes '87", boatType: "12-Metre" },
        { year: 1992, location: "San Diego, California", hostTeam: "San Diego Yacht Club", winningTeam: "America^3", boatType: "International America's Cup Class" },
        { year: 1995, location: "San Diego, California", hostTeam: "San Diego Yacht Club", winningTeam: "Team New Zealand", boatType: "International America's Cup Class" },
        { year: 2000, location: "Auckland, New Zealand", hostTeam: "Royal New Zealand Yacht Squadron", winningTeam: "Team New Zealand", boatType: "International America's Cup Class" },
        { year: 2003, location: "Auckland, New Zealand", hostTeam: "Alinghi", winningTeam: "Alinghi", boatType: "International America's Cup Class" },
        { year: 2007, location: "Valencia, Spain", hostTeam: "Alinghi", winningTeam: "Alinghi", boatType: "International America's Cup Class" },
        { year: 2010, location: "Valencia, Spain", hostTeam: "Alinghi", winningTeam: "Oracle Team USA", boatType: "90ft Catamaran" },
        { year: 2013, location: "San Francisco, California", hostTeam: "Oracle Team USA", winningTeam: "Oracle Team USA", boatType: "AC72" },
        { year: 2017, location: "Hamilton, Bermuda", hostTeam: "Emirates Team New Zealand", winningTeam: "Emirates Team New Zealand", boatType: "AC50"}
    ];

    const tbody = document.querySelector("#history-table tbody");

    // Reverse the order of the historyData array
    historyData.reverse();

    // Populate table with history data, created by Chat GPT
    historyData.forEach((entry, index) => {
        const row = document.createElement("tr");
        const { year, location, hostTeam, winningTeam, boatType } = entry;
        row.innerHTML = `
            <td>${year}</td>
            <td>${location}</td>
            <td>${hostTeam}</td>
            <td>${winningTeam}</td>
            <td>${boatType}</td>
        `;
        tbody.appendChild(row);
    });
});
