getUserData(
  (user) => {
    getIp(
      user,
      (ip) => {
        getLocationFromIp(
          ip,
          (location) => {
            logUserWithLocation(
              user,
              location,
              () => {
                console.log("Finished logging user!");
              },
              (err) => {
                console.error(err);
              }
            );
          },
          (err) => {
            console.error(err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  },
  (err) => {
    console.error(err);
  }
);

function getUserData() {}
function getIp() {}
function getLocationFromIp() {}
function logUserWithLocation() {}
