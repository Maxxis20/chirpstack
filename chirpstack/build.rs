use std::process::Command;

fn main() {
    // Generate build timestamp in MMDDHHMM format
    let output = Command::new("date")
        .arg("+%m%d%H%M")
        .output()
        .expect("Failed to execute date command");

    let build_time = String::from_utf8(output.stdout)
        .expect("Invalid UTF-8")
        .trim()
        .to_string();

    println!("cargo::rerun-if-changed=build.rs");
    println!("cargo::rustc-env=BUILD_TIMESTAMP={}", build_time);
}
