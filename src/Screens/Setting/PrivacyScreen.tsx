import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    useWindowDimensions,
    Button,
    Pressable
  } from 'react-native';

export const PrivacyScreen = ({navigation}) =>  {
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView style={{margin: 24}}>
            <Text style={{fontSize: 24, marginBottom: 36, fontWeight: '500'}}>Chính sách quyền riêng tư</Text>
            <Text style={styles.textHead}>a) Mục đích và phạm vi thu thập</Text>
            <Text style={{lineHeight: 34, fontSize: 20}}>
            Việc thu thập dữ liệu chủ yếu trên website bao gồm: họ tên, email, điện thoại, địa chỉ khách hàng trong mục liên hệ. Đây là các thông tin mà chúng tôi cần thành viên cung cấp bắt buộc khi gửi thông tin nhờ tư vấn hay muốn mua sản phẩm và để chúng tôi liên hệ xác nhận lại với khách hàng trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng.
            Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho webiste chúng tôi về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
            Ứng dụng chỉ thu thập vị trí của người dùng khi chạy nền cho mục đích vận hành một số tính năng nhất định trong hệ thống và chỉ hoạt động khi có sự cho phép từ phía người dùng.
            </Text>

            <Text style={styles.textHead}>b) Phạm vi sử dụng thông tin</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            Chúng tôi sử dụng thông tin thành viên cung cấp để:
            Liên hệ xác nhận đơn hàng và giao hàng cho thành viên khi nhận được yêu cầu từ thành viên;
            Cung cấp thông tin về sản phẩm đến khách hàng nếu có yêu cầu từ khách hàng;
            Gửi email tiếp thị, khuyến mại về hàng hóa do chúng tôi bán;
            Gửi các thông báo về các hoạt động trên website
            Liên lạc và giải quyết với người dùng trong những trường hợp đặc biệt;
            Không sử dụng thông tin cá nhân của người dùng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch
            Khi có yêu cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng.
            </Text>

            <Text style={styles.textHead}>c) Thời gian lưu trữ thông tin</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu ban quản trị hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của chúng tôi
            </Text>

            <Text style={styles.textHead}>d) Những người hoặc tổ chức có thể được tiếp cận với thông tin đó</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:
            Nhân viên của công ty
            Các đối tác có ký hợp động thực hiện 1 phần dịch vụ của Công Ty. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do Công ty cung cấp.
            </Text>

            <Text style={styles.textHead}>e) Địa chỉ của đơn vị thu thập và quản lý thông tin, bao gồm cách thức liên lạc để người tiêu dùng có thể hỏi về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân mình</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            CÔNG TY CỔ PHẦN CÔNG NGHỆ BK TECH
            Tầng 6, tòa nhà H6, Trường ĐH Bách Khoa, đường Tạ Quang Bửu.
            Phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh
            </Text>

            <Text style={styles.textHead}>f) Phương thức và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình trên hệ thống thương mại điện tử của đơn vị thu thập thông tin</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ với ban quản trị website thực hiện việc này.
            Thành viên có quyền gửi khiếu nại về nội dung bảo mật thông tin đề nghị liên hệ Ban quản trị của website. Khi tiếp nhận những phản hồi này, chúng tôi sẽ xác nhận lại thông tin, trường hợp đúng như phản ánh của thành viên tùy theo mức độ, chúng tôi sẽ có những biện pháp xử lý kịp thời.
            </Text>

            <Text style={styles.textHead}>g) Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>Thông tin cá nhân của thành viên được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.
            Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết.
            Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của thành viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa
            Ban quản lý yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, điện thoại,…., và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</Text>

            <Text style={styles.textHead}>h) Yêu cầu xóa bỏ dữ liệu người dùng</Text>

            <Text style={{lineHeight: 34, fontSize: 20}}>
            Nếu bạn có yêu cầu muốn chúng tôi xóa bỏ toàn bộ thông tin cá nhân của bạn trong hệ thống của chúng tôi, vui lòng gửi email vào support@busguide.vn với nội dung "Yêu cầu xóa bỏ dữ liệu của tôi" và thông tin chính xác địa chỉ email hoặc số điện thoại cần xóa bỏ tài khoản, chúng tôi sẽ hỗ trợ xóa toàn bộ thông tin cá nhân của bạn trong hệ thống của chúng tôi.

            </Text>
        </ScrollView>
      </SafeAreaView>
    );
    // return (
    //     <View>
    //         <Text style={styles.title}>Địa chỉ của tôi</Text>
    //     </View>
    // )

}

const styles = StyleSheet.create({
    textHead: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 34,
        marginBottom: 24,
    },
    saveBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 54,
        backgroundColor: "#1A1528",
        borderRadius: 16,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        marginHorizontal:24,
    },

})