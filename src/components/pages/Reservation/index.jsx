import tarif from "./tarif.jpeg";
import './index.scss'

const Tarif = () => {
  return (
    <>
    <div className="container-fluid" >
      <div className="row justify-content-between" style={{ marginTop: "50px" }}>
        <div className="col-lg-5">
        
            <h3 style={{ fontWeight: "bold", fontSize: "35px" ,marginTop:'20px'}}>
              HOME OF GAMING C'EST QUOI ?
            </h3>
            <p style={{ marginBottom: "25px", fontSize: "30px" }}>
              Home of Gaming{" "}
            </p>
            <p style={{ fontSize: "30px", marginBottom: "25px" }}>
              {" "}
              C'est le meilleur <p />
              E-Sport de Oujda !{" "}
              <p style={{ fontSize: "30px", marginBottom: "25px" }}>
                C'est aussi : <p />
              </p>
              . 10 PC Hautes performances <p />
              avec tous les jeux du moment
              <p />. 2 Coins salon (TV 55 % ,PS5 )
            </p>
        
        </div>
        <div className="col-lg-5">
          <center>
            <img
              src={tarif}
              className="img-thumbnail"
              alt="house of gaming"
              style={{ width: "450px", marginTop: "50px" }}
            />
          </center>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <center>
            <h1 style={{marginTop:'130px',marginBottom:'120px',fontSize:'40px',fontWeight:'bold',fontFamily:'-moz-initial'}}>T  A  R  I  F  S </h1>
            </center>
      
        </div>
      </div>
      

<div class="row" style={{marginBottom:'300px'}}>
    <div class="col-md-4 col-sm-6">
        <div class="pricing-table-3 basic">
            <div class="pricing-table-header">
                <h4><strong>BASIC</strong></h4>
                <p>home of gaming</p>
            </div>
            <div class="price"><strong>Time</strong> / Of Gaming</div>
            <div class="pricing-body">
                <ul class="pricing-table-ul">
                    <li><i class="fa fa-send"></i> </li>
                    <li><i class="fa fa-cloud"></i><b style={{fontSize:'30px',color:'blue'}}>230 DH </b> </li>
                    <li><i class="fa fa-database"></i><b style={{fontSize:'30px',color:'blue'}}>=== &gt;</b></li>
                    <li class="not-avail"><i class="fa fa-clock-o"></i><b style={{fontSize:'30px',color:'blue'}}>16 H </b>  </li>

                </ul><a href="#" class="view-more" style={{backgroundColor:'blue'}}> </a></div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6">
        <div class="pricing-table-3 premium">
            <div class="pricing-table-header">
                <h4><strong>STANDART</strong></h4>
                <p>home of gaming</p>
            </div>
            <div class="price"><strong>Time</strong> / Of Gaming</div>
            <div class="pricing-body">
                <ul class="pricing-table-ul">
                    <li><i class="fa fa-send"></i> </li>
                    
                    <li><i class="fa fa-cloud"></i><b style={{fontSize:'30px',color:'orange'}}>330 DH </b> </li>
                    <li><i class="fa fa-database"></i><b style={{fontSize:'30px',color:'orange'}}>=== &gt;</b></li>
                    <li class="not-avail"><i class="fa fa-clock-o"></i><b style={{fontSize:'30px',color:'orange'}}>24 H </b>  </li>
                </ul><a href="#" class="view-more" style={{backgroundColor:'orange'}}></a></div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="pricing-table-3 business">
            <div class="pricing-table-header">
                <h4><strong>PREMIUM</strong></h4>
                <p>home of gaming</p>
            </div>
            <div class="price"><strong>Time</strong> / Of Gaming</div>
            <div class="pricing-body">
                <ul class="pricing-table-ul">
                    <li><i class="fa fa-send"></i> </li>

                    <li><i class="fa fa-cloud"></i><b style={{fontSize:'30px',color:'#c3185c'}}>250 DH </b> </li>
                    <li><i class="fa fa-database"></i><b style={{fontSize:'30px',color:'#c3185c'}}>=== &gt;</b></li>
                    <li class="not-avail"><i class="fa fa-clock-o"></i><b style={{fontSize:'30px',color:'#c3185c'}}>15 H <span style={{color:'black',fontSize:'20px'}}> (Pc + Ps)</span></b> </li>
                </ul><a href="#" class="view-more" style={{backgroundColor:'#c3185c'}}></a></div>
        </div>
    </div>
</div>


    </div>
 
    </>
  );
};

export default Tarif;
0;
