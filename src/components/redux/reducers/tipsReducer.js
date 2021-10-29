const initialState = {
  data: [
    {
      id: "dbh6fghjgj",
      title: "Start quickly with simple steps",
      slug: "start-quickly-with-simple-steps",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/dbh6fghjgj.jpg",
    },
    {
      id: "lgmd6ielxi",
      title: "Run smoothly at vero eos et accusamus",
      slug: "run-smoothly-at-vero-eos-et-accusamus",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/lgmd6ielxi.jpg",
    },
    {
      id: "qlrl8c8xqg",
      title: "Denounce with righteous indignation",
      slug: "denounce-with-righteous-indignation",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/qlrl8c8xqg.jpg",
    },
  ],
};

const tipsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
  }
};

export default tipsReducer;
