async function signup() {
  const Name = document.getElementById("1").value;
  const Email = document.getElementById("2").value;
  const Phone = document.getElementById("3").value;
  const cDate = document.getElementById("4").value;
  const T = document.getElementById("5").value;

  const user = { name: Name, email: Email, phone: Phone, date: cDate, time: T };

  try {
    
    await axios.post('http://localhost:5000/usersend', user);
    
  } catch (error) {
    console.error(error);
  }
}

async function show(mr) {
  try {
    if (Array.isArray(mr)) {
      mr.forEach(m => {
        const r = document.querySelector(".show");
        const ct = document.createElement("li");
        let str = `${m.name} - ${m.email} - ${m.phone} `;
        ct.textContent = str;

        let del = document.createElement("input");
        del.type = "button";
        del.value = "Delete";
        del.onclick = async () => {
          await axios.delete(`http://localhost:5000/deleteuser/${m.id}`);
          r.removeChild(ct);
        };

        let ed = document.createElement("input");
        ed.type = 'button';
        ed.value = 'Edit';
        ed.onclick = async () => {
          document.getElementById("1").value = m.name;
          document.getElementById("2").value = m.email;
          document.getElementById("3").value = m.phone;
          document.getElementById("4").value = m.date;
          document.getElementById("5").value = m.time;
          await axios.delete(`http://localhost:5000/deleteuser/${m.id}`);
          r.removeChild(ct);
        };

        ct.appendChild(ed);
        ct.appendChild(del);
        r.appendChild(ct);
      });
    } else {
      console.error("Invalid data format. Expected an array.");
    }
  } catch (error) {
    console.error(error);
  }
}

window.onload = async function () {
  try {
    const response = await axios.get('http://localhost:5000/userdata');
    show(response.data.info);
    
  } catch (error) {
    console.error(error);
  }
};


