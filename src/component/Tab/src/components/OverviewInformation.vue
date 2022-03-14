<template>
  <div class="OverviewInformation">
    <div class="diagnostic">
      <!-- <div class="top-img">
                <div style="position: relative;">
                <div style="position: absolute;">
                <div style="position: absolute;">
                    <img class="smail-img" src="../../imgge/halo-smail.png" >
                </div>
                <img class="def-img" src="../../imgge/halo-def.png"/>
                    
                </div>
                    <img class="big-img" src="../../imgge/halo-big.png" >
                </div>
            </div> -->
      <div class="top-img">
        <div style="position: relative">
          <div class="content">
            <p>美味虾尾</p>
            <p>美味虾尾</p>
            <span class="wave"></span>
            <span class="wave"></span>
            <span class="wave"></span>
          </div>
          <div style="position: absolute">
            <div style="position: absolute">
              <img class="smail-img-on" src="../../imgge/halo-smail-on.png" />
            </div>
            <img class="def-img-on" src="../../imgge/halo-def-on.png" />
          </div>
          <img class="big-img-on" src="../../imgge/halo-big-on.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewInformation",
};
</script>

<style lang="scss" scoped>
.OverviewInformation {
  width: 100%;
  display: flex;
  justify-items: center;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 0.99) 0%,
  //   #ffffff 65%,
  //   #f0f2f5 89%
  // );
  .diagnostic {
    // height: calc(100vh - 138px);
    height: 424px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .top-img {
      width: 270px;
      height: 270px;
      border-radius: 135px;
      .smail-img,
      .def-img,
      .big-img,
      .smail-img-on,
      .def-img-on,
      .big-img-on {
        width: 270px;
        height: 270px;
      }
      .def-img-on {
        animation: rotate 3s linear infinite;
      }
      .big-img-on {
        //  animation: reverse 3s linear infinite;
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes reverse {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      .content {
        position: absolute;
        width: 270px;
        height: 270px;
        border-radius: 135px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        > p {
          color: rgb(252, 247, 247);
          font-size: 30px;
          text-align: center;
        //   line-height: 270px;
          position: relative;
          z-index: 99999;
          font-weight: bold;
          font-family: serif;
        }
      }

      //  animation: rotate 3s linear infinite;   linear// 意思就是匀速的运动   infinite// 就是无限滚动的意思
    }

  }
}
</style>