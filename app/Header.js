import React from 'react';
const Header = () => {
  return (
    <>
      <div className="header" style={{ backgroundColor: "lightgray"}}>
      
         <div className="container-fulid" style={{height: "120px" }}>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                  <a className="nav-link" href="/Women">
                    <img src="https://img.freepik.com/free-photo/young-happy-smiling-woman-casual-clothes-holding-laptop-sending-email-her-best-friend_231208-9568.jpg?w=2000" class="img-fluid mx-5"alt="Women Image" style={{ width: '80px', height: '80px' }}
                      />
                   <p class="img-fluid mx-5">Women</p>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Electronic">
                    <img src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=" class="img-fluid mx-5" alt="Electronic Image" style={{ width: '80px', height: '80px' }}/>
                     <p class="img-fluid mx-5">Electronics</p>
                </a>
              </li>
               
              <li className="nav-item">
                <a className="nav-link" href="/Jewelery">
                    <img src="https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs=" class="img-fluid mx-4" alt="Jewelery Image" style={{ width: '100px', height: '80px' }} />
                    <p class="img-fluid mx-5">Jewelery</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Men">
                    <img src="https://img.lovepik.com/free-png/20210918/lovepik-business-men-manipulate-pictures-with-laptop-png-image_400248627_wh1200.png" class="img-fluid mx-4" alt="Men Image" style={{ width: '80px', height: '80px' }}/>
                    <p class="img-fluid mx-5">Men</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Shoes">
                  <img src="https://assets.ajio.com/medias/sys_master/root/20230502/TWj0/64513679d55b7d0c6390db36/-473Wx593H-469430180-white-MODEL.jpg" class="img-fluid mx-4"alt="Shoes Image"style={{ width: '80px', height: '80px' }} />
                  <p class="img-fluid mx-5">Shoes</p>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Header;

