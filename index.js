$(document).ready(function () {
    $.getJSON("./details.json", function (data) {
      $(window).scrollTop(0);
      $(location).prop("href", "/#hero");
      console.log(data);
      let navbar = $(
        "<div class='flex flex-row justify-center fixed inset-x-0 bottom-10 z-10'><div id='nav' class='flex bg-[rgba(0,0,0)] w-[250px] h-[40px] items-center justify-around rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:w-[300px]'><a href='#hero' class='outline-none border-none w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-3px]'><svg class='text-[20px]' stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z'></path></svg></a></div></div>",
      );
      let hero = $(
        "<div id='hero' class='flex h-screen justify-center items-center bg-slate-800 p-[4%]'></div>",
      );
      $("#root").append(hero);
      $("#root").append(navbar);
      if (data.projects.length > 0) {
        $("#nav")
          .append(`<a href="#proj-div" class="outline-none border-none w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-3px]">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21h1v2H3V7h2v1H4v14h11zm3-2H7V5h1V4H6v16h13v-2h-1zm.4-18L22 4.6V17H9V1zM21 6h-4V2h-7v14h11zm0-1.31L18.31 2H18v3h3z" fill="#fff" style=""></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
          </a>`);
        let proj = $(
          "<div id='proj-div' class='bg-slate-800 w-[100%] p-[4%]'><h1 class='text-gray-200 text-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl'>Projects</h1><p class='text-center text-gray-400 mb-[2%] mx-auto text-base leading-relaxed lg:w-2/3'>Curious about my work? Dive into my projects to see my skills in action. </p><div id='projs'></div></div>",
        );
        $("#root").append(proj);
        for (let i = 0; i < data.projects.length; i++) {
          $("#projs").append(`<div
      class="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto rounded-lg shadow-lg p-2 bg-white mb-[4%]">
      <div class="p-2 sm:w-1/2">
        <img src='${data.projects[i].thumbnail}' width='500' height='500'/>
      </div>
      <div class="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
          <div>
              <p class="text-black font-extrabold text-2xl w-[100%]">${data.projects[i].name}</a>
              <p class="mt-2 text-sm text-black p-[2%] w-[100%]" style="word-break: break-word; overflow-wrap: break-word;">${data.projects[i].description}</p>
          </div>
          <a href='${data.projects[i].link}' target='_blank'>
          <span class="mt-4 text-sm flex row items-center gap-1">
             <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
             ${data.projects[i].link}
          </span></a>
      </div>
  </div>`);
         
        }
      }
      if (data.experiences.length > 0) {
        $("#nav")
          .append(`<a href='#exp-div' class="outline-none border-none w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-3px]">
          <svg fill="#000000" width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z" fill="#fff" style=""></path></svg>
        </a>`);
        let exps =
          $(`<div class='flex flex-col p-[4%] item-center bg-slate-800' id='exp-div'><h1 class='text-gray-200 text-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl'>Experience</h1><p class='text-center text-gray-400 mx-auto text-base leading-relaxed lg:w-2/3'>Learn about my professional journey and how I've honed my craft. Interested in working together? Let's connect to discuss your project needs.</p><div class="py-10 container mx-auto px-5 w-[50%]">
              <div class="relative">
                  <div class="border-r-4 border-gray absolute h-full top-0" style={{ 'left': '9px' }}></div>
                  <ul class="list-none" id='exps' ></ul></div></div></div>`);
        $("#root").append(exps);
        for (let i = 0; i < data.experiences.length; i++) {
          let expDet = data.experiences[i];
          $("#exps").append(`
            <li class="mb-5">
                <div class="flex group items-center ">
                    <div class="bg-gray-800 rounded-full border-4 border-gray-300  h-5 w-5">
                        <div class="bg-gray-300 h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div class="flex-1 ml-4 font-medium">
                        <div class="order-1 space-y-2 bg-gray-300 rounded-lg shadow-only transition-ease lg:w-100% px-6 py-4">
                            <h3 class="mb-3 font-bold text-black text-2xl">${expDet.company}</h3>
                            <p class="pb-4 text-sm text-black">${expDet.role} (${formatDate(expDet.startDate)} - ${formatDate(expDet.endDate)})</p>
                            <hr class='w-[100%] h-0.5 dark:bg-black'/>
                            <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">${expDet.description}</p>
                        </div>
                    </div>
                </div>
            </li>`);
        }
      }
      hero.html(`<div class="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
          <div class="text-center ">
              <h1
                  class="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline"><span class="mb-1 block">Hello, I am</span>
                  <span class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                      ${data.personalDetails.name}
                  </span>
                  </span>
                  <div class="mt-2">
                      <span class="relative mt-3 whitespace-nowrap text-blue-600">
                      <svg aria-hidden="true" viewBox="0 0 418 42"
                          class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                          preserveAspectRatio="none">
                          <path
                              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                          </path>
                      </svg>
                      <span class="relative">${data.personalDetails.bio}</span>
                      </span>
                  </div>
              </h1>
              <p class="mx-auto mt-3 max-w-xl text-lg text-gray-500 sm:mt-5 md:mt-5">
                  Interested in exploring how my expertise can benefit your project? Let's initiate a conversation to discuss your goals in detail.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div class="rounded-md shadow"><a
                          class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                          href="#cont">Get in touch 🚀
                      </a>
                  </div>
              </div>
          </div>
      </div>`);
      if (data.education.length > 0) {
        let eduts = $(
          "<div id='edu' class='bg-slate-800 p-[4%]'><h1 class='text-gray-200 text-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl'>Education</h1><p class='text-center text-gray-400 mx-auto text-base leading-relaxed lg:w-2/3'>My educational journey has shaped my perspective and skill set. Want to know how? Explore my academic background. Let's discuss how my expertise can benefit your project.</p></div>",
        );
        $("#root").append(eduts);
        data.education.forEach((edu) => {
          $("#edu").append(`
            <div class="card bg-slate-100 mt-[2%] w-[60%]">
              <svg class='graduation-hat' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 245.827 245.827" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#010002;" d="M223.336,148.384l-0.137-23.527l22.628-12.662L122.576,47.195L0,113.495l49.144,28.216 l0.098,16.766l0.01,1.339l0.449-0.215c-0.518,0.703-0.85,1.426-0.84,2.149c0.039,8.246,33.326,14.772,74.41,14.548 c41.064-0.215,74.302-7.122,74.273-15.349c0-0.723-0.381-1.426-0.889-2.149l0.449,0.215v-1.339l-0.088-16.834l21.309-13.258 l0.117,20.83c-2.345,1.006-3.976,3.312-3.957,6.009c0.02,3.537,2.892,6.399,6.458,6.37c3.586-0.02,6.429-2.912,6.409-6.439 C227.332,151.657,225.691,149.371,223.336,148.384z M123.241,170.621c-36.452,0.205-66.017-3.801-66.046-8.91 c-0.029-5.11,29.496-9.399,65.949-9.585c36.462-0.205,66.017,3.781,66.037,8.881 C189.209,166.098,159.703,170.426,123.241,170.621z M195.335,127.183c-4.934-5.188-22.618-18.886-72.426-18.602 c-49.877,0.264-67.336,14.128-72.211,19.394l-0.029-4.963c0,0,14.147-21.524,72.202-21.827 c58.025-0.313,72.436,21.045,72.436,21.045L195.335,127.183z M215.755,162.199l-2.511,36.433 c7.767-12.203,14.255-7.66,14.255-7.66l-0.156-28.832C218.998,165.414,215.755,162.199,215.755,162.199z"></path> </g> </g> </g> </g></svg>
              <div class="details">
                  <div class="institution">${edu.inst}</div>
                  <div class="field">${edu.deg} (${edu.field})</div>
                  <div class="years-grade-container">
                      <div class="years">${edu.start} - ${edu.end}</div>
                      <div class="grade">${edu.grade}</div>
                  </div>
              </div>
            </div>
          `);
        });
        $("#nav")
          .append(`<a href='#edu' class="outline-none border-none w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-3px]">
              <svg class="text-[20px]" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 30 35" aria-hidden="true" height="1.2em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <polygon class="st0" points="16,4 1,12 16,20 31,12 "></polygon>
                  <path class="st0" d="M7,15.2V22c0,2.2,4,5,9,5c5,0,9-2.8,9-5v-6.8"></path>
                  <line class="st0" x1="31" y1="12" x2="31" y2="25"></line>
              </svg>
          </a>`);
      }
      $("#nav")
        .append(`<a href="#skill-div" class="outline-none border-none w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-3px]">
            <svg fill="#000000" width="2em" height="2em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M43.84,46.76a5.35,5.35,0,1,1,5.46-5.34A5.41,5.41,0,0,1,43.84,46.76Z" fill-rule="evenodd" fill="#fff" style=""></path><path d="M77.33,55.7,70.06,44.9V44A24,24,0,0,0,46.19,20a22,22,0,0,0-5.67.7A23.89,23.89,0,0,0,22.31,44a21.92,21.92,0,0,0,3.58,12.7c4.18,6,7,10.8,5.27,17.3a4.58,4.58,0,0,0,.9,4.2A4.43,4.43,0,0,0,35.74,80h19.6A4.72,4.72,0,0,0,60,76.2a5,5,0,0,0,.2-1.2,2.37,2.37,0,0,1,2.39-2H64a4.72,4.72,0,0,0,4.68-3.4A41.31,41.31,0,0,0,70.16,60h5.17a2.78,2.78,0,0,0,2.19-1.6A2.86,2.86,0,0,0,77.33,55.7ZM57.49,47.33l-1,1.57a2.22,2.22,0,0,1-1.76.94,2.38,2.38,0,0,1-.72-.16l-2.65-1a11.64,11.64,0,0,1-3.85,2.2l-.48,2.91a2,2,0,0,1-2,1.65h-2a2,2,0,0,1-2-1.65l-.48-2.91a10,10,0,0,1-3.69-2l-2.81,1a2.38,2.38,0,0,1-.72.16,2.1,2.1,0,0,1-1.76-1l-1-1.65a1.94,1.94,0,0,1,.48-2.51l2.33-1.89a10.11,10.11,0,0,1-.24-2.12,9.41,9.41,0,0,1,.24-2L31.1,36.88a1.92,1.92,0,0,1-.48-2.51l1-1.65a2,2,0,0,1,1.76-1,2.38,2.38,0,0,1,.72.16l2.81,1a11.52,11.52,0,0,1,3.69-2.12L41,28a1.91,1.91,0,0,1,2-1.57h2a1.92,1.92,0,0,1,2,1.49l.48,2.83a11.31,11.31,0,0,1,3.69,2l2.81-1a2.38,2.38,0,0,1,.72-.16,2.1,2.1,0,0,1,1.76,1l1,1.65A2,2,0,0,1,57,36.8l-2.33,1.89a9.56,9.56,0,0,1,.24,2.12,9.41,9.41,0,0,1-.24,2L57,44.74A2,2,0,0,1,57.49,47.33Z" fill-rule="evenodd" fill="#fff" style=""></path></svg>
        </a>`);
      let skill = $(`<div id='skill-div'>
      <section class="text-gray-200 bg-slate-800 p-[4%]">
          <div class="max-w-6xl mx-auto px-5 py-10 ">
            <div class="text-center mb-20">
              <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Skills</h1>
              <p class='text-center text-gray-400 mx-auto text-base leading-relaxed lg:w-2/3'>My skills are your solution. Explore my abilities to see how I can help you achieve your vision. Let's work together!</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div class="grid grid-cols-4 grid-flow-row gap-4" id='skill'></div></div></section></div>`);
      $("#root").append(skill);
      for (let i in data.skills) {
        $("#skill").append(
          `<div class='text-slate-800 text-center py-[5%] rounded-xl bg-gray-200'>${data.skills[i].toUpperCase()}</div>`,
        );
      }
      $("#root").append(`
        <section class="body-font relative bg-slate-800 text-gray-400 p-[4%]" id='cont'>
  
    <div class="container mx-auto px-5 py-24">
      
      <div class="mb-12 flex w-full flex-col text-center">
        <h1 class="text-gray-200 text-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Contact</h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out ! Whether you have a question,
          feedback, or a collaboration proposal, I'd love to hear from you.
        </p>
      </div>
  
      <div class="mx-auto md:w-2/3 lg:w-1/2">
          <!-- form -->
          <form id='contact-form' class='-m-2 flex flex-wrap'>\
            <div class="w-1/2 p-2">
              <div class="relative">
                <input type="text" id="name" name="name" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" required/>
                <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-slate-800 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class="relative">
                <input type="email" id="email" name="email" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" required/>
                <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-slate-800 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
              </div>
            </div>
            <div class="mt-4 w-full p-2">
              <div class="relative">
                <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message" required></textarea>
                <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-slate-800 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
              </div>
            </div>
            <div class="w-full p-2">
              <a id='mail-link'></a>
              <button type='submit' class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
            </div>
          </form>
  
  
          <!-- footer -->
          <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <span class="inline-flex">
              <a href='${data.personalDetails.github}' class='mx-5'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30" class='fill-white'>
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
  </svg>
              </a>
              <a href='${data.personalDetails.linkedin}'>
  <svg fill="#000000" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class='fill-white' data-name="Layer 1"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
              </a>
            </span>
          </div>
      </div>
  
    </div>
    
  </section>`);
      $("#contact-form").on("submit", function (e) {
        e.preventDefault();
        let name = $("#name").val();
        let mail = $("#email").val();
        let message = $("#message").val();
        let mailtoLink = `mailto:${data.personalDetails.email}?subject=Message%20from%20${name}&body=Mail%20:%20${mail}%0D%0A${message}`;
        console.log(mail, message);
        console.log(mailtoLink);
        $("#mail-link").prop("href", mailtoLink);
        let mailLink = document.getElementById("mail-link");
        mailLink.click();
      });
    });
  });
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = { year: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  }