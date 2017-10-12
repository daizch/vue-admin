<template>
  <section>
    <el-upload
      class="upload-container"
      drag
      action="//freelog.com/api/file"
      :headers="headers"
      :on-error="errorHandler"
      :on-success="nextAction"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">上传文件不超过256MB</div>
    </el-upload>
  </section>
</template>

<script>
  import Creator from './index'
  export default Creator
</script>

<style lang="less" scoped>
  .upload-container {
    width: 20%;
    margin: auto;
  }
</style>
