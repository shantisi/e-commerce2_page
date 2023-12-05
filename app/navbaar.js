import Link from "next/link";
const Navbaar = () => {
  return (
    <>
      <div className="header" style={{ backgroundColor: "#0000FF"}}>
		<div className="container-fluid">
       		<nav class="navbar bg-primary" data-bs-theme="white">
		        <img src="https://i.pinimg.com/736x/fc/92/e4/fc92e41da2ee3221e4e78f7805d298a1.jpg" class="img-fluid mx-3" alt="Brand Logo"  style={{height:"50px"}} />
          		<form class="d-flex" role="search">
				  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"style={{width:"500px"}}/>
				  <button class="btn btn-outline-success" type="submit">Search</button>
				</form>
				<div>
				    <img src="https://i.pinimg.com/originals/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg" alt="Add toCart" className="img-fluid mx-2" style={{height:"50px"}}/>
				    <img src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="User Profile" className="img-fluid mx-3" style={{height:"50px"}}/>
				</div>
        	</nav>
      	 </div>
      </div>
    </>
  );
};

export default Navbaar;

