// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * After copying the image, write the digest of the resulting image to the file.
     * By default, the filename will be determined from the image and tag.
     * The contents of this file are the digest output.
     * Required: false
     * Default: None.
     */
    DIGESTFILE = "digestfile",
    /**
     * Extra args to be passed to podman push.
     * Separate arguments by newline. Do not use quotes - @actions/exec will do the quoting for you.
     * Required: false
     * Default: None.
     */
    EXTRA_ARGS = "extra-args",
    /**
     * Name of the image/manifest to push (e.g. username/imagename or imagename)
     * Required: false
     * Default: None.
     */
    IMAGE = "image",
    /**
     * Password to use as credential to authenticate to the registry
     * Required: false
     * Default: None.
     */
    PASSWORD = "password",
    /**
     * Hostname and optional namespace to push the image to (eg. quay.io/username or quay.io)
     * Required: false
     * Default: None.
     */
    REGISTRY = "registry",
    /**
     * 'The tag or tags of the image/manifest to push.
     * For multiple tags, separate by whitespace. For example, "latest v1"'
     * Required: false
     * Default: "latest"
     */
    TAGS = "tags",
    /**
     * Verify TLS certificates when contacting the registry
     * Required: false
     * Default: "true"
     */
    TLS_VERIFY = "tls-verify",
    /**
     * Username to use as credential to authenticate to the registry
     * Required: false
     * Default: None.
     */
    USERNAME = "username",
    /**
     * Sigstore private key to use to sign container images
     * Required: false
     * Default: None.
     */
    SIGSTORE_PRIVATE_KEY = "sigstore-private-key",
    /**
     * Passphrase to unlock the Sigstore private key
     * Required: false
     * Default: None.
     */
    SIGN_PASSPHRASE = "sign-passphrase",
}

export enum Outputs {
    /**
     * The pushed image/manifest digest, as written to the "digestfile"
     * Required: false
     * Default: None.
     */
    DIGEST = "digest",
    /**
     * The first element of registry-paths.
     * Required: false
     * Default: None.
     */
    REGISTRY_PATH = "registry-path",
    /**
     * A JSON array of registry paths to which the tag(s) were pushed
     * Required: false
     * Default: None.
     */
    REGISTRY_PATHS = "registry-paths",
}
