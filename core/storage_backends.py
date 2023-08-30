from storages.backends.s3boto3 import S3BotoStorage


class StaticStorage(S3BotoStorage):
    location = 'static'
    default_acl = 'private'


class MediaStorage(S3BotoStorage):
    location = 'media'
    file_overwrite = False




StaticRootS3BotoStorage = lambda: S3BotoStorage(location='static')
MediaRootS3BotoStorage  = lambda: S3BotoStorage(location='media')