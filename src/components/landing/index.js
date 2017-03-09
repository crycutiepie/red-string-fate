import React, {Component} from 'react';

class Landing extends Component {
  goToGift = () => {
      this.props.router.push('/gift');
  };

  render(){
    return (
      <section className="wrap">
          <section className="gift">
              <div className="giftcard" onClick={this.goToGift}>Give me<br/>my gift!</div>
              <section className="gift_top">
                  <div className="ribbon_right"></div>
                  <div className="ribbon_left"></div>
                  <div className="gift_box_top"></div>
                  <div className="gift_ribbon_left"></div>
              </section>
              <div className="gift_ribbon_center"></div>
              <div className="gift_box_bottom_top"></div>
              <div className="gift_box_bottom">
                  <div className="gift_box_bottom_ribbon" id="ribbon1"></div>
                  <div className="gift_box_bottom_ribbon" id="ribbon2"></div>
                  <div className="gift_box_bottom_ribbon" id="ribbon3"></div>
                  <div className="gift_box_bottom_ribbon" id="ribbon4"></div>
              </div>
          </section>
          <section className="cake">
              <div className="one_number">
                  <div className="one_flame"></div>
                  <span className="number_birthday">2</span>
              </div>
              <div className="seven_number">
                  <div className="seven_flame"></div>
                  <span className="number_birthday">2</span>
              </div>
              <section className="cake_top2">
                  <section className="cake_top1_creams">
                      <div className="cake_top1_cream1"></div>
                      <div className="cake_top1_cream2"></div>
                      <div className="cake_top1_cream3"></div>
                      <div className="cake_top1_cream4"></div>
                      <div className="cake_top1_cream5"></div>
                      <div className="cake_top1_cream6"></div>
                      <div className="cake_top1_cream7"></div>
                      <div className="cake_top1_cream8"></div>
                      <div className="cake_top1_cream9"></div>
                      <div className="cake_top1_cream10"></div>
                      <div className="cake_top1_cream11"></div>
                      <div className="cake_top1_cream12"></div>
                      <div className="cake_top1_cream13"></div>
                  </section>
              </section>
              <section className="cake_top1">
                  <div className="cherry" id="cherry1"></div>
                  <div className="cherry" id="cherry2"></div>
                  <div className="cherry" id="cherry3"></div>
                  <div className="cherry" id="cherry4"></div>
                  <div className="cherry" id="cherry5"></div>
                  <section className="circles">
                      <div className="cake_circle" id="circle1"></div>
                      <div className="cake_circle" id="circle2"></div>
                      <div className="cake_circle" id="circle3"></div>
                      <div className="cake_circle" id="circle4"></div>
                      <div className="cake_circle" id="circle5"></div>
                  </section>
                  <div className="cake_line" id="cake_line1"></div>
                  <div className="cake_line" id="cake_line2"></div>
                  <div className="cake_line" id="cake_line3"></div>
                  <div className="cake_line" id="cake_line4"></div>
                  <div className="cake_line" id="cake_line5"></div>
                  <div className="cake_line" id="cake_line6"></div>
                  <div className="cake_line" id="cake_line7"></div>
                  <div className="cake_line" id="cake_line8"></div>
                  <div className="cake_line" id="cake_line9"></div>
                  <div className="cake_line" id="cake_line10"></div>
                  <div className="cake_line" id="cake_line11"></div>
                  <div className="cake_line" id="cake_line12"></div>
                  <div className="cake_line" id="cake_line13"></div>
                  <div className="cake_line" id="cake_line14"></div>
                  <div className="cake_line" id="cake_line15"></div>
                  <div className="cake_line" id="cake_line16"></div>
                  <div className="cake_line" id="cake_line17"></div>
                  <div className="cake_line" id="cake_line18"></div>
                  <div className="cake_line" id="cake_line19"></div>
                  <div className="cake_line" id="cake_line20"></div>
                  <div className="cake_line" id="cake_line21"></div>
                  <div className="cake_line" id="cake_line22"></div>
                  <div className="cake_line" id="cake_line23"></div>
                  <div className="cake_line" id="cake_line24"></div>
              </section>
              <section className="cake_bottom3">
                  <section className="cake_bottom3_creams">
                      <div className="cake_bottom3_cream1"></div>
                      <div className="cake_bottom3_cream2"></div>
                      <div className="cake_bottom3_cream3"></div>
                      <div className="cake_bottom3_cream4"></div>
                      <div className="cake_bottom3_cream5"></div>
                      <div className="cake_bottom3_cream6"></div>
                      <div className="cake_bottom3_cream7"></div>
                      <div className="cake_bottom3_cream8"></div>
                      <div className="cake_bottom3_cream9"></div>
                      <div className="cake_bottom3_cream10"></div>
                      <div className="cake_bottom3_cream11"></div>
                      <div className="cake_bottom3_cream12"></div>
                      <div className="cake_bottom3_cream13"></div>
                      <div className="cake_bottom3_cream14"></div>
                      <div className="cake_bottom3_cream15"></div>
                      <div className="cake_bottom3_cream16"></div>
                      <div className="cake_bottom3_cream17"></div>
                      <div className="cake_bottom3_cream18"></div>
                      <div className="cake_bottom3_cream19"></div>
                      <div className="cake_bottom3_cream20"></div>
                      <div className="cake_bottom3_cream21"></div>
                      <div className="cake_bottom3_cream22"></div>
                      <div className="cake_bottom3_cream23"></div>
                  </section>
              </section>
              <section className="cake_bottom2">
                  <section className="cake_bottom1_creams">
                      <div className="cake_bottom1_cream1"></div>
                      <div className="cake_bottom1_cream2"></div>
                      <div className="cake_bottom1_cream3"></div>
                      <div className="cake_bottom1_cream4"></div>
                  </section>
              </section>
              <div className="cake_bottom">
              </div>
          </section>
          <div className="line"></div>
      </section>
    );
  }
}

export default Landing;
