
    $.getJSON("donation.json", function(data){     
        $.each(data, function(key, val){
            $('#donation').append(                
            '<div class="col-md-4">'+
                '<div class="cause shadow-sm">'+
                '<a href="'+val.id+'" class="cause-link d-block">'+
                    '<img src="images/'+val.img+'" alt="Image" class="img-fluid">'+
                    '<div class="custom-progress-wrap">'+
                    '<span class="caption">'+val.caption+'</span>'+
                    '<div class="custom-progress-inner">'+
                        '<div class="custom-progress bg-warning" style="width: 50%;"></div>'+
                    '</div>'+
                    '</div>'+
                '</a>'+
                '<div class="px-3 pt-3 border-top-0 border border ">'+
                    '<span class="badge-warning py-1 small px-2 rounded mb-3 d-inline-block">'+val.badge+'</span>'+
                    '<h3 class="mb-4"><a href="#">'+val.judul+'</a></h3>'+
                    '<div class="border-top border-light border-bottom py-2 d-flex">'+
                    '<div>Donated</div>'+
                    '<div class="ml-auto"><strong class="text-primary">'+val.jumlah+'</strong></div>'+
                    '</div>'+
                    '<div class="border-top border-light border-bottom py-2 d-flex">'+
                    '<button type="button"  class="btn btn-block btn-primary text-white py-3 px-5 rounded-0"  >'+
                        '<a href="donasi.html" class="text-white">Donasi Sekarang</a></button>'+
                    '</div>'+
                    '<div class="py-4">'+
                    '<div class="d-flex align-items-center">'+
                        '<img src="images/'+val.imgpeople+'" alt="Image" class="rounded-circle mr-3" width="50">'+
                        '<div class="">'+val.fundaiser+'</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'
            );
            
       
     })
});
      