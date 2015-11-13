(function($){
  $(function(){
    var $searchBox = $("#search-box")
    var $completeBox = $(".search-complete-box")
    var $completeBoxItems = $(".search-complete-box ul li")
    var $searchCompanyLink = $(".search-company-link")
    var $searchJobLink = $(".search-job-link")
    $searchBox.on("keydown", function(e){
      switch(e.which){
        case 38: // ↑
        case 40: // ↓
          // 上下の選択のみなので、toggleで逃げる。3つ以上の選択が出てきたら作り直す前提。
          $completeBoxItems.toggleClass("selected")
          return false
      }
    })
    $completeBoxItems.on("mouseover", function(e){
      $completeBoxItems.removeClass("selected")
      $(this).addClass("selected")
    })
    $searchBox.on("change keypress keydown keyup blur", function(e){
      setTimeout(function(){
        var val = $searchBox.val()
        $completeBox.toggle(val.length > 0)
        $(".search-word-container").text(val)
      }, 0)
    })
    $searchBox.on("blur", function(e){
      $completeBox.hide()
    })
  })
})(jQuery)