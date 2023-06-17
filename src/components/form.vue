<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { message } from "ant-design-vue"
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"

const formState = reactive({
    username: "",
    password: "",
})
const router = useRouter()

const onFinish = data => {
    message.success("登录成功", 1)
    console.log("Success:", data)
    router.push({ path: "/project-manage" })

    // this.$refs.formState.validate(valid => {
    //     if (valid) {
    //         this.loading = true;
    //         // this.$store
    //         //     .dispatch("user/login", this.formState)
    //         //     .then(() => {
    //         //         localStorage.setItem("username", this.formState.username);
    //         this.$router.push({ path: "/" });
    //         //         this.loading = false;
    //         //         console.log(this.formState);
    //         //     })
    //         //     .catch(() => {
    //         //     this.loading = false;
    //         // });
    //     } else {
    //         console.log("error submit!!");
    //         return false;
    //     }
    // });
}

const onFinishFailed = errorInfo => {
    message.error("登录失败，请检查你的账号密码是否输入正确", 1)
}
</script>

<template>
    <a-form
        :model="formState"
        name="user_login"
        class="w-100"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <h3 class="login-form-title">账号密码登录</h3>

        <a-form-item
            name="username"
            :rules="[
                { required: true, message: 'Please input your username!' },
            ]"
        >
            <a-input
                v-model:value="formState.username"
                class="login-form-input"
            >
                <template #prefix>
                    <UserOutlined
                        class="site-form-item-icon"
                        style="color: rgba(91, 154, 248, 1)"
                    />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item
            name="password"
            :rules="[
                { required: true, message: 'Please input your password!' },
            ]"
        >
            <a-input-password
                v-model:value="formState.password"
                class="login-form-input"
            >
                <template #prefix>
                    <LockOutlined
                        class="site-form-item-icon"
                        style="color: rgba(91, 154, 248, 1)"
                    />
                </template>
            </a-input-password>
        </a-form-item>

        <a-form-item>
            <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
                >登录</a-button
            >
        </a-form-item>
    </a-form>
</template>

<style lang="less">
.login-form {
    width: 368px;
    height: 272px;
}
.login-form-title {
    font-size: 16px;
    width: 96px;
    height: 32px;
    border-bottom: rgba(91, 154, 248, 1) solid 2px;
    color: rgba(91, 154, 248, 1);
    margin-bottom: 24px;
}
.login-form-input {
    height: 40px;
    border-color: rgba(153, 153, 153, 1);
}

.login-form-button {
    margin-top: 46px;
    width: 100%;
}
#components-form-demo-normal-login .login-form {
    max-width: 300px;
}
#components-form-demo-normal-login .login-form-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#components-form-demo-normal-login .login-form-button {
    width: 100%;
}
</style>
