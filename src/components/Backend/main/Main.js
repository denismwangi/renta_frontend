import './main.css';
import Chart from '../charts/Chart';
const Main = () =>{

    return(
        <main>
        <div className="main-container">
            <div className="main-title">
                <img/>
                <div className="main-greeting">
                    <h1>Hello Denis</h1>
                    <p>welcome to your dashboard</p>

                </div>
            </div>
            <div className="main-cards">
                <div className="card">
                    <div style={{marginBottom:'10px'}}>
                    <i className="fa fa-user-o fa-2x text-lightblue" style={{marginLeft: '40px'}}></i>
                    </div>
                    <div className="card-inner">
                        <p className="text-primary-p">nummber of customers</p>
                        <span className="font-bold text-title">34</span>
                    </div>
                </div>
                <div className="card">
                    <i className="fa fa-calender fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">times of watching</p>
                            <span className="font-bold text-title">56</span>
                        </div>
                </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow" style={{marginLeft: '40px'}}></i>

                            <div className="card-inner">
                                <p className="text-primary-p">Number of videos</p>
                                <span className="font-bold text-title">455</span>
                            </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">number of likes</p>
                            <span className="font-bold text-title">78</span>
                        </div>
                    </div>
          </div>
          <div className="charts">
              <div className="charts-left">
                  <div className="chart-left-title">
                      <div>
                          <h1>Daily Report</h1>
                          <p>cuplino , Califonia USA</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                <Chart/>
              </div>
               <div className="chart-right">
                   <div className="chart-right-title">
                       <div>
                           <h1>stats reports</h1>
                           <p>cuplino , Califonia USA</p>
                       </div>
                       <i className="fa fa-use"></i>
                   </div>
                <div className="charts-right-cards">
                    <div className="card1">
                        <h1>Income</h1>
                        <p>$876</p>
                    </div>
                    <div className="card2">
                        <h1>Sales</h1>
                        <p>$87698</p>
                    </div>
                    <div className="card3">
                        <h1>Users</h1>
                        <p>900</p>
                    </div>
                    <div className="card4">
                        <h1>Order</h1>
                        <p>876</p>
                    </div> 
                </div>
               </div>
          </div>
        </div>
    </main>
    )
}
export default Main;