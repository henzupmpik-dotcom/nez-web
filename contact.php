<?php
/**
 * Simple Contact Form Processor for Hostinger servers.
 */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Get form data securely
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = strip_tags(trim($_POST["service"]));
    $message = strip_tags(trim($_POST["message"]));

    // 2. Setup your email address
    // Change this to your business email where you want to receive notifications
    $to = "info@nezautomechanic-example.com"; 
    
    // 3. Email Subject
    $subject = "New Contact Request: $service - from $name";

    // 4. Email format & content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Service Required: $service\n\n";
    $email_content .= "Message:\n$message\n";

    // 5. Email Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // 6. Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success: Redirect to a thank you page or back to contact with success parameter
        header("Location: contact.html?success=1");
        exit;
    } else {
        // Failure: Redirect back to contact with error
        header("Location: contact.html?error=1");
        exit;
    }
} else {
    // Not a POST request
    header("Location: contact.html");
    exit;
}
?>
