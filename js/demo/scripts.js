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
    
  
  
  });
  