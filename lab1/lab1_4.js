// lab1_4.js
document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
      const data = await response.json();
  
      const app = document.getElementById('pc123456');
      const list = data.data;
  
      let html = `<table class="table">
        <tr >
      
          <th class="bg-primary text-white">#</th>
          <th class="bg-primary text-white">Nation</th>
          <th class="bg-primary text-white">Year</th>
          <th class="bg-primary text-white">Population</th>
        </tr>`;
  
      let index = 1; 
  
      list.forEach(element => {
        html += `<tr>
          <td>${index}</td>
          <td>${element.Nation}</td>
          <td>${element.Year}</td>
          <td>${element.Population}</td>
        </tr>`;
        
        index++; 
      });
      
      html += `</table>`;
      app.innerHTML = html;
    } catch (error) {
      console.log("Error:", error);
    }
  });
  
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students");
      const data = await response.json();
  
      const app = document.getElementById('pc12345');
      const list = data;
  
      let html = `<table class="table">
        <tr >
        <th class="bg-primary text-white">#</th>
          <th class="bg-primary text-white">Ảnh đại diện</th>
          <th class="bg-primary text-white">Họ và tên</th>
          <th class="bg-primary text-white">Ngày tạo</th>
        </tr>`;
        let index = 1; 
      list.forEach(element => {
        html += `<tr>
        <td>${index}</td>
          <td><img src="${element.avatar}" alt="Ảnh đại diện" style="width: 50px; height: 50px;"></td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
        </tr>`;
        index++; 
      });
  
      html += `</table>`;
      app.innerHTML = html;
    } catch (error) {
      console.log("Error:", error);
    }
  });
  