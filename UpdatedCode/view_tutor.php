<?php 
if(isset($_GET['id']) && $_GET['id'] > 0){
    $qry = $conn->query("SELECT *, CONCAT(lastname,', ',firstname , COALESCE(concat(' ', middlename), '')) as `name` FROM `tutor_list` where id = '{$_GET['id']}' and delete_flag = 0 and `status` = 1");
    if($qry->num_rows > 0){
        foreach($qry->fetch_array() as $k => $v){
            if(!is_numeric($k))
                $$k = $v;
        }
        if(isset($id)){
            $meta_qry = $conn->query("SELECT * from `tutor_meta` where tutor_id = '{$id}' ");
            while($row = $meta_qry->fetch_assoc()){
                ${$row['meta_field']} = $row['meta_value'];
            }
        }
    }
}
?>
<style>
    .course_logo{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center center;
        display: hidden;
    }

    @import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
}

.gradient {
  background-image: linear-gradient(to right, #dc3545, #ffc107);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.banner {
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
    url("https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.banner > h3 {
  color: #fff;
  height: inherit;
  font-weight: 900;
  font-size: 2.8rem;
}

.intro > h2 > span {
  font-weight: 900;
  font-size: 2.5rem;
  border-bottom: 2px solid #dc3545;
}

.intro > p {
  line-height: 1.655;
  word-spacing: 0.3rem;
  font-weight: 400;
  color: #3e3d3d;
  font-size: 16.2px;
  margin-bottom: 1.5rem;
}

.pic {
  height: 150px;
  width: 150px;
}
.pic .profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
}

h2 {
  font-weight: 900;
}

.b-line {
  border-bottom: 3px solid #dc3545;
  border-radius: 2px;
}

.name h1 {
  font-weight: 900;
  font-size: 2.5rem;
}

.text > li {
  list-style: none;
  padding: 12px 0 8px 0;
  border-bottom: 1px solid #8f8e8e;
}

.btn {
  background: linear-gradient(to right, #dc3545, #ffc107);
}
.btn:hover {
  background: linear-gradient(to right, #ffc107, #dc3545);
}

</style>
<div class="content py-5 px-4 banner">
    <h3 class="font-weight-bolder"><center>Tutor's Profile</center></h3>
</div>
<div class="row mt-n5 justify-content-center">
    <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12">
        <div class="card card-outline rounded-0 shadow">
            <div class="card-header">
                <div class="card-tools">
                    <a class="btn btn-light btn-flat bg-gradient-light border btn-sm" href="./?p=tutors"><i class="fa fa-angle-left"></i> Back to List</a>
                </div>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                <?php if($_settings->chk_flashdata('inquiry_success')): ?>
                    <div class="alert alert-success  rounded-0">
                        <div class="d-flex align-items-center">
                            <div class="col-11"><?= $_settings->flashdata('inquiry_success') ?></div>
                            <div class="col-1 text-right">
                                <a href="javascript:void(0)" class="p-1 text-decoration-none text-reset font-weight-bolder" onclick="$(this).closest('.alert').remove()"><i class="fa fa-times"></i></a>
                            </div>
                        </div>
                    </div>
                <?php endif;?>
                <div class="pro d-flex">
          <div class="pic">
            <img
              src="https://fakeimg.pl/150x150"
              alt="profile-img"
              class="profile-pic"
            />
          </div>
          <div class="name mt-5 ms-5">
            <h1><?= isset($name) ? strtoupper($name) : ' ' ?></h1>
          </div>
        </div>
                <div class="mt-5">
          <h2><span class="b-line">Introduction</span></h2>
          <div class="intro d-flex col-12 mt-3">
            <div class="text col-3 fw-bolder">
              <li>Birthday</li>
              <li>Gender</li>
              <li>Email</li>
              <li>Contact</li>
              <li>Address</li>
            </div>

            <div class="text col-8">
              <li><?= isset($dob) ? date("F d, Y", strtotime($dob)) : '' ?></li>
              <li><?= isset($gender) ? strtoupper($gender) : '' ?></li>
              <li><?= isset($email) ? ($email) : '' ?></li>
              <li><?= isset($contact) ? ($contact) : '' ?></li>
              <li>
                <?= isset($address) ? str_replace(["\n\r", "\n", "\r"], "<br/>",
                $address) : '' ?>
              </li>
            </div>
          </div>
        </div>
                    </div>
                    
                    
                    <div class=" mt-5"></div>
                    <fieldset>
                        <legend class= "ml-4 fw-bolder"><h2><span class="b-line">Subjects</span></h2></legend>
                        
                        <div id="course_list" class="list-group">
                            <?php 
                            $courses = $conn->query("SELECT * FROM `course_list` where tutor_id = '{$id}' and delete_flag = 0 and `status` = 1 order by `name` asc ");
                            while($row = $courses->fetch_assoc()):
                            ?>
                            <div class="list-group-item list-group-action border-top m-3 p-0">
                                <div class="row mx-0 ml-5">
                                    <div class="col-lg-12 col-md-9 col-sm-12 col-xs-12 p-0">
                                        <div class="row m-0">
                                            <div class="col-lg-3 col-md-4 col-sm-5 border align-middle fw-bolder">Class</div>
                                            <div class="col-lg-9 col-md-8 col-sm-7 border align-middle"><?= $row['name'] ?></div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-lg-3 col-md-4 col-sm-5 border align-middle fw-bolder">Experience</div>
                                            <div class="col-lg-9 col-md-8 col-sm-7 border align-middle"><?= $row['experience'] ?></div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-lg-3 col-md-4 col-sm-5 border align-middle fw-bolder">Fee</div>
                                            <div class="col-lg-9 col-md-8 col-sm-7 border align-middle"><?= str_replace(['\n\r', '\n', '\r'], '', $row['description']) ?></div>
                                        </div>
                                        <div class="my-3 text-center">
                                            <button class="btn btn-sm rounded-pill px-3 btn-danger
                                             inquire" type="button" data-id="<?= $row['id'] ?>" data-name="<?= addslashes($row['name']) ?>"><i class="fa fa-info-circle"></i> Send Inquiry</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    $(function(){
        $('.inquire').click(function(){
            var id = $(this).attr('data-id')
            var name = $(this).attr('data-name')
            uni_modal('<i class="fa fa-info-circle"></i> Send Inquiry for <b>'+name+' Course</b> of <b><?= isset($name) ? $name : '' ?></b>', 'tutors/inquire.php?tutor_id=<?= isset($id) ? $id : '' ?>&course_id='+id,'modal-lg')
        })
    })
    
</script>