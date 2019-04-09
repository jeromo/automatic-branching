$(document).ready(function(){
  function ChangePresentation() {
    $("#div_version").hide();
    $("#div_maven_profile").hide();
    $("#div_branch_name").hide();

    switch (selectedBranchType) {
      case "1": // Feature
        $("#div_version").hide();
        switch (selectedStatus) {
          case "1": $("#label_branch_name").text("Feature Name");$("#div_branch_name").show(); $("#div_maven_profile").hide(); break;
          case "2": $("#div_branch_name").hide(); $("#div_maven_profile").show(); break;
          case "3": $("#label_branch_name").text("Feature branch to merge");$("#div_branch_name").show(); $("#div_maven_profile").show(); break;
        }
        break;
      case "2": // Release
        $("#div_version").hide();
        $("#div_maven_profile").show();
        switch (selectedStatus) {
          case "1": $("#div_branch_name").hide(); break;
          case "2": $("#div_branch_name").hide(); break;
          case "3": $("#label_branch_name").text("Release branch to merge");$("#div_branch_name").show(); break;
        }
        break;
      case "3": // Hotfix
        switch (selectedStatus) {
          case "1": $("#div_branch_name").hide();$("#div_maven_profile").hide(); $("#div_version").show(); break;
          case "2": $("#div_branch_name").hide();$("#div_maven_profile").show(); $("#div_version").hide(); break;
          case "3": $("#label_branch_name").text("Hotfix branch to merge");$("#div_branch_name").show();$("#div_maven_profile").show(); $("#div_version").show(); break;
        }
        break;
    }
  }

  function buildURLParams(
    selectedBranchType,
    selectedStatus) {
    urlParams ="REPO_URL=" + $("#repository").val();
    switch (selectedBranchType) {
      case "1": // Feature
        switch (selectedStatus) {
          case "1":  urlParams += "&BRANCH_NAME=develop&FEATURE_STATUS=start&FEATURE_NAME=" + $("#branch").val();break;
          case "2":  urlParams += "&MAVEN_PROFILE=" + $("#maven_profile").val();break;
          case "3":  urlParams += "&BRANCH_NAME=" + $("#branch").val() + "&FEATURE_STATUS=finish&MAVEN_PROFILE=" + $("#maven_profile").val();
        }
        break;
      case "2": // Release
        switch (selectedStatus) {
          case "1":  urlParams += "&BRANCH_NAME=develop&RELEASE_STATUS=start&MAVEN_PROFILE=" + $("#maven_profile").val();break;
          case "2":  urlParams += "&MAVEN_PROFILE=" + $("#maven_profile").val();break;
          case "3":  urlParams += "&BRANCH_NAME=" + $("#branch").val() + "&MAVEN_PROFILE=" + $("#maven_profile").val() + "&RELEASE_STATUS=finish";
        }
        break;
      case "3": // Hotfix
        switch (selectedStatus) {
          case "1":  urlParams += "&BRANCH_NAME=master&HOTFIX_STATUS=start&MAVEN_PROFILE=" + $("#maven_profile").val() + "&HOTFIX_VERSION=" + $("#version").val() ;break;
          case "2":  urlParams += "&MAVEN_PROFILE=" + $("#maven_profile").val();break;
          case "3":  urlParams += "&BRANCH_NAME=" + $("#branch").val() + "&MAVEN_PROFILE=" + $("#maven_profile").val() + "&HOTFIX_STATUS=finish" +
            "&HOTFIX_VERSION=" + $("#version").val();
        }
        break;
    }
    return urlParams;
  }

  var selectedBranchType = "",
    selectedStatus     = "";

  $("#select_branch").val("0");
  $("#select_status").val("0");

  ChangePresentation();

  $("#select_branch").change(function(){
    selectedBranchType = $("#select_branch option:selected").val();
    ChangePresentation();
  });

  $("#select_status").change(function(){
    selectedStatus = $("#select_status option:selected").val();
    ChangePresentation();
  });

  $("form").submit(function( event ) {
    event.preventDefault();

    if (selectedBranchType == "" || selectedStatus == "" ) {
      alert("You must choose a branch type and a branch status");

      return;
    }
    location.href = 'https://google.com/?' + buildURLParams(
      selectedBranchType,
      selectedStatus);

  });
});
