import qrcode
# 实例化二维码生成类
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
# 设置二维码数据
data = "https://krasewallet.top/"
qr.add_data(data=data)

# 启用二维码颜色设置
qr.make(fit=True)
img = qr.make_image(fill_color="blue", back_color="white")

# 显示二维码
img.save('./qrimg.png')