describe("3-Point Safety Belt Application Testing",function(){

it("Verifying URL", async function(){

browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
await expect(browser).toHaveUrl("https://www.volvocars.com/intl/v/car-safety/a-million-more")
await expect(browser).toHaveTitle("A million more | Volvo Cars - International")
await browser.pause(5000)

})

  it("TestCase for Logo Image Exists", async function(){
      const Image = await $("//*[@id='site-nav-topbar-wrapper']/nav/div/a/img");
      await expect (Image).toExist();
      const ImagePresent = await Image.isDisplayed()
      console.log("Image Is Present?",ImagePresent)
    
    })

    it("TestCase for HeaderText Exist", async function(){

       const headerText= await $("//*[@id='ModelIntro-1']/section/h2");
       expect(headerText).toExist;
       const text = await headerText.getText();
       expect(text).toContain("Ideas that change the world are often the most controversial");

    })

    it("TestCase for Footer cookies Links", async function(){
      const cookies = await $("a[href='https://www.volvocars.com/intl/v/legal/cookies']");
      expect(cookies).toExist;

    })

    it("TestCase for Watch Story Vedio exists", async function(){
      const vdo = await $('#Video-1');
      expect(vdo).toExist;
      const vdodisplay = await vdo.isDisplayed()
      console.log("Vedio Is Present?",vdodisplay)
    
    })

    it("TestCase for Vedios section exists", async function(){
      const VediosSecton = await $('#VideoTestimonials-1');
      expect(VediosSecton).toExist;
      const SectionDisplay = await VediosSecton.isDisplayed()
      console.log("Vedios Section Is Present?",SectionDisplay)
    
    })

    it("TestCase for VedioButton Exist", async function(){
      const btn = await $("//*[@id='Video-1']/section/div/div/div/button");
      expect(btn).toExist;
    })

    it("Learn more Click", async function(){

       const learnMore = await $("a[href='/intl/v/car-safety/safety-heritage']")
       await learnMore.click()
    })

   it("Verifying Menu Icon", async function(){
    browser.url('/');
    const menuIcon = await $("button[id='sitenav-sidenav-toggle']")
    const clickStatus = await menuIcon.isClickable()
    const enableStatus = await menuIcon.isEnabled()
    const dispalyStatus =await menuIcon.isDisplayed()
    console.log("Clickable?",clickStatus)
    console.log("Enabled?",enableStatus)
    console.log("Displayed?",dispalyStatus)

 })

 it("Verifying Our Car Menu", async function(){
    browser.url('/');
    const carMenu = await $("button[id='nav:topNavCarMenu']")
    const clickStatus = await carMenu.isClickable()
    const enableStatus = await carMenu.isEnabled()
    const dispalyStatus =await carMenu.isDisplayed()
    console.log("Car Menu Clickable?",clickStatus)
    console.log("Car Menu Enabled?",enableStatus)
    console.log("Care Menu Displayed?",dispalyStatus)

 })

 

})

