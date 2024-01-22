const Market = () => {
  return (
    <div
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "2%",
        paddingBottom: "2%",
        backgroundColor: "#FFFFD0",
        height: "90vh",
      }}
    >
      <div
        className="font-bold text-gray-900"
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "5%",
          paddingBottom: "5%",
          background: "white",
          fontSize: "22px",
        }}
      >
        Hello, this is a website for generating your own custom FAQ. You can
        also look at other people's FAQ forms for an example. Whether you want
        to use this website for your company's FAQ page, or in order to improve
        your studying experience, you just need to follow the below steps to
        quickly get this website working for you.
      </div>
      <div className="flex space-x-8">
        <div
          className="font-semibold text-gray-700"
          style={{
            padding: "50px",
            backgroundColor: "white",
            marginTop: "4%",
            fontSize: "18px",
          }}
        >
          Step 1: Sign up and remember your login credentials by clicking the
          Sign up button in the Navgiation Bar and submitting the form on the
          sign up page.
        </div>
        <div
          className="font-semibold text-gray-700"
          style={{
            backgroundColor: "white",
            marginTop: "4%",
            padding: "50px",
            fontSize: "18px",
          }}
        >
          Step 2: Log in with your new login credentials by clicking the Log in
          button in the navigation bar and submitting the form on the login
          page.
        </div>
        <div
          className="font-semibold text-gray-700"
          style={{
            backgroundColor: "white",
            marginTop: "4%",
            padding: "50px",
            fontSize: "18px",
          }}
        >
          Step 3: Go to your personal page and start by entering a FAQ's title
          in the entry box, then click the button below the entry box to add it.
          The link to your new FAQ form is embedded in the title.
        </div>
      </div>
    </div>
  );
};

export default Market;
