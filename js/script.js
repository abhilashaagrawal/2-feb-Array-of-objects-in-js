   
    const news=[
        {   n1h1:'Four arrested for posing as brokers on real estate website, duping people of lakhs',
            n1p1:"The suspects would target people who were looking for rentals on websites facilitating the sale and purchase of properties, officers said"
        },
        {
            n2h2:`Top 5 tallest statues in the world`,
            n2p2:'From Statue of Unity in India to Spring Temple Buddha in China, here are top five tallest statues in the world.'
        },
        {
            n3h3:"This country has advised people to stay indoors amid ‘eye-burning’ air pollution",
            n3p3:`Thailand Air Pollution: The PM2.5 concentration in Bangkok, Thailand's capital was at 14 times the level recommended by the World Health Organisation (WHO)`
        }
    ];
    console.log(news[1].n2h2);
    document.querySelector('.myclass').innerHTML=news[1].n2h2;
    document.write('<p>'+news[1].n2p2+'<div>');