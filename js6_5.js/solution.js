function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = document.getElementById('searchField').value.toLowerCase();
      const rows = document.querySelectorAll('.container tbody tr');
      
      rows.forEach(row => {
         row.classList.remove('select');
         const cells = Array.from(row.children);
         for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            let cellText = cell.textContent.toLowerCase();
            if (cellText.includes(searchText)) {
                row.classList.add('select');
                break; 
            }
        }
      });
   }
}