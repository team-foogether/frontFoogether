import React from 'react';
import Styled from 'styled-components/native';
import {ScrollView} from 'react-native';

const Container = Styled.View``;

const LabelContainer = Styled.View``;

const Label = Styled.Text``;

const OpensourceLicense = () => {
    return (
        <Container>
            <LabelContainer>
                <Label>This application is Copyright © Foogether Corp. All rights reserved.

The following sets forth attribution notices for third party software that may be contained in this application.
{'\n'}
https://github.com/fmtlib/fmt
Copyright 2012 - present, Victor Zverovich
MIT License
{'\n'}
abseil-cpp
https://github.com/abseil/abseil-cpp
Copyright 2017 The Abseil Authors.
Apache License 2.0
{'\n'}
Android - platform - frameworks - support
https://android.googlesource.com/platform/frameworks/support
Copyright 2014 The Android Open Source Project
Apache License 2.0
{'\n'}
Android - platform - ndk (Native Development Kit)
https://android.googlesource.com/platform/ndk
Copyright 2016 The Android Open Source Project
Apache License 2.0
{'\n'}
Android Constraint Layout Library
https://developer.android.com/reference/android/support/constraint/packages
Copyright 2017 The Android Open Source Project
Apache License 2.0
{'\n'}
base64 (C++)
https://github.com/ReneNyffenegger/cpp-base64
Copyright 2004-2017 René Nyffenegger
zlib License
{'\n'}
c-ares
https://github.com/c-ares/c-ares
Copyright 2007 - 2018, Daniel Stenberg with many contributors, see AUTHORS file.
c-ares license
{'\n'}
curl
https://github.com/curl/curl
Copyright 1996 - 2017, Daniel Stenberg, daniel@haxx.se, and many contributors, see the THANKS file.
MIT License
{'\n'}
Date
https://github.com/HowardHinnant/date
Copyright 2015, 2016, 2017 Howard Hinnant and Contributors.
MIT License
{'\n'}
Google Skia Graphics Library
https://github.com/google/skia
Copyright 2011 Google Inc.
BSD 3-Clause "New" or "Revised" License
{'\n'}
GSM 06.10 Lossy Speech Compression
http://www.quut.com/gsm/
Copyright 1992, 1993, 1994 by Jutta Degener and Carsten Bormann
Technical University of Berlin GSM License
{'\n'}
gzipdemo
http://www.codeguru.com/cpp/cpp/algorithms/compression/article.php/c5125/Two-Classes-for-Doing-Gzip-in-Memory.htm
Copyright 1995-2002 Gao Dasheng(dsgao@hotmail.com)
zlib License
{'\n'}
JsonCpp
https://github.com/open-source-parsers/jsoncpp
Copyright 2007-2010 Baptiste Lepilleur
MIT License
{'\n'}
KillProcDLL plug-in
http://nsis.sourceforge.net/KillProcDLL_plug-in
Copyright 2003 by DITMan
zlib/libpng License with Acknowledgement
{'\n'}
libbson
https://github.com/mongodb/libbson
Copyright 2009-2013 MongoDB, Inc.
Apache License 2.0
{'\n'}
Libtiff
http://www.libtiff.org/
Copyright 1988-1997 Sam Leffler.
Copyright 1991-1997 Silicon Graphics, Inc
libtiff License
{'\n'}
libvpx
https://github.com/webmproject/libvpx
Copyright 2010, The WebM Project authors. .
BSD 3-Clause "New" or "Revised" License
{'\n'}
Libwebm
https://github.com/webmproject/libwebm/
Copyright 2010, Google Inc
BSD 3-Clause "New" or "Revised" License</Label>
            </LabelContainer>
        </Container>
    );
};

export default OpensourceLicense;