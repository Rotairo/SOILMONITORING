// Call the dataTables jQuery plugin
$(document).ready(function() {


  const tbl_soil = $('#dataTable').DataTable({
    "pagingType": "full_numbers",
        "lengthMenu": [
          [15, 25, 50, -1],
          [15, 25, 50, "All"]
        ],
        searchable: true,
        responsive: true,
        deferRender: true,

        language: {
          search: "_INPUT_",
          info : "Showing _START_ to _END_ of _TOTAL_ Data",
          loadingRecords : "Loading data.....",
          searchPlaceholder: "Search data....",
          infoFiltered:   "(filtered from _MAX_ total data)",
          zeroRecords :    "No data found",
        },
        
        
        columnDefs: [
                {  // set default column settings
                    searchable : false,
                    orderable: false,
                    targets: 0
                }
          
                ]

              });

  var loadSoilData = function() {
                let ncount=0;
                let pcount=0;
                let kcount=0;
                let nsum = 0;
                let psum = 0;
                let ksum = 0;
                let n,p,k=0;
                let nave,pave,kave = 0.0;
                //load
                tbl_soil.clear();
                setInterval(function(){
                
                  n = randomInteger(10,100);
                  p = randomInteger(10,100);
                  k = randomInteger(10,100);
               
                
                tbl_soil.row.add([randomInteger(50,100),randomInteger(50,100),n,p,k]);
               tbl_soil.draw();

               nsum += n;
               psum += p;
               ksum += k;
               ncount++;
               pcount++;
               kcount++;
                
              nave = nsum / ncount;
              pave = psum / pcount;
              kave = ksum / kcount;


              $('#nr').text(`${100 - nave.toPrecision(2)}%`)
              $('#np').text(`${100 - pave.toPrecision(2)}%`)
              $('#nk').text(`${100 - kave.toPrecision(2)}%`)
               
                
                },10000);


              }

  loadSoilData();


   
 function randomInteger(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        // Get the chart canvas
var ctx = document.getElementById('myPieChart').getContext('2d');

});
